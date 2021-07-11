import { Component, OnInit, HostListener } from '@angular/core';
import { Producto } from 'src/app/modelos/productos';
import { CrudService } from 'src/app/servicios/crud.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sinpubli',
  templateUrl: './sinpubli.component.html',
  styleUrls: ['./sinpubli.component.css']
})
export class SinpubliComponent implements OnInit {

  @HostListener("scroll", ['$event'])

  categoria:any;
  productos: any;
  categoriaString:string =''
  cantidad:any;
  cambioPlantilla:boolean = true;
  loader = true;
  constructor(public crudService:CrudService, public ruta:ActivatedRoute, private location:Location) {
    this.crudService.scrolled =false
    window.scrollTo(0,0);
   }


  ngOnInit(): void {
   this.pedirProductos()
  }


  pedirProductos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.

this.productos = []=[]

    this.crudService.getProductos().subscribe(res =>{
    this.crudService.productos = res as Producto[];  // guardo resultados de la peticion en el servicio
    this.productos = res as Producto[]; // guardo resultados de la peticion en variable productos del este componente.
    this.loader = false



    // if(this.categoria === "Articulos"){
    //   this.cantidad = this.filtro(this.productos, 'Articulos' )
    //   this.cantidad = this.cantidad.length
    //      }

    // if(this.categoria === "Exposicion"){

    //   this.cantidad = this.filtro(this.productos, 'Exposicion' )
    //   this.cantidad = this.cantidad.length}



    });//fin de subscribe


    // falta agregar loading

              } //fin de pedirProductos



              filtro(value:any, arg:any){

    const resultPost =[];
    var todo:string;
    for(const categoria of value){
      var todo:string = categoria.imagen3 + categoria.categoria;
        if(todo.indexOf(arg) >-1 ){
          resultPost.push(categoria);
          this.scrollTop()
    };

  };
  return resultPost;


}


evento($event:any)
{
  if ( window.pageYOffset > 310) {
    this.crudService.scrolled = true;}
    else {this.crudService.scrolled =false}




  };

  scrollTop(){
    window.scrollTo(0,0);
  }



  cancel() {
    this.crudService.loading=true;
    this.location.back(); // <-- go back to previous location on cancel
    }
 }


