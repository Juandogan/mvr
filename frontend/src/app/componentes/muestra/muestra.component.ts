import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { CrudService } from '../../servicios/crud.service';
import { Producto } from '../../modelos/productos';


@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})
export class MuestraComponent implements OnInit {


  public nota: Producto;
  public loading:boolean = true;

  constructor(
    private ruta:ActivatedRoute,
    private crudService:CrudService,
    private location: Location

) {


    this.nota = new Producto();
    this.ruta.params.subscribe(params=>{params['_id'];

    this.crudService.getOneCard(params['_id'])
    .subscribe(res=> {this.nota = res as Producto; this.loading =false ;



    }
   );


   })


  }

  ngOnInit(): void {
    window.scrollTo(-1000,-1000);
    window.scrollTo(0,0);


  }

  cut(value:any){
     var corte = value.slice(8)

    return corte
  };


  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
    }

   saltos(data:any){
    return data.split("\n").join("<br />")


   };

}
