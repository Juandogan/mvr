import { Component, OnInit, HostListener } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { CrudService } from '../../servicios/crud.service';
import { Producto } from '../../modelos/productos';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})


export class ArticuloComponent implements OnInit {



  @HostListener("scroll", ['$event'])
  public nota: Producto;
  public loading:any;
  public notas:any
  public loader:any
  constructor(
    private ruta:ActivatedRoute,
    public crudService:CrudService,
    private location: Location



) {

    this.nota = new Producto();
    this.ruta.params.subscribe(params=>{params['_id'];

    this.crudService.getOneCard(params['_id'])
    .subscribe(res=> {this.nota = res as Producto; 
   
      window.scrollTo(0,0);
    this.loader = false;
    }
   );
   })
  }

  ngOnInit(): void {
    this.loader=true
    this.crudService.scrolled =false



      this.crudService.getProductos().subscribe(res=>{
      this.notas = res as Producto;
 
      })

  }

  cut(value:any){
     var corte = value.slice(8)

    return corte
  };

  cancel() {
    this.crudService.loading=true;
    this.location.back(); // <-- go back to previous location on cancel
    }

   saltos(data:any){
     return data


   };
   evento($event:any)
{
  if ( window.pageYOffset > 310) {
    this.crudService.scrolled = true;}
    else {this.crudService.scrolled =false}




  };


}
