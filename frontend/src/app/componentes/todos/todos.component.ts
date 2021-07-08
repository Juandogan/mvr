import { Component, OnInit, HostListener } from '@angular/core';
import { Producto } from 'src/app/modelos/productos';
import { CrudService } from 'src/app/servicios/crud.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit  {

  @HostListener("scroll", ['$event'])

  categoria:any;
  productos: any;
  categoriaString:string =''
  cantidad:any;
  cambioPlantilla:boolean = true
  constructor(public crudService:CrudService, public ruta:ActivatedRoute) {
    this.crudService.scrolled =false
    window.scrollTo(0,0);
   }


  ngOnInit(): void {


     this.ruta.params.subscribe(params=>{this.categoria = params['categoria'];
     this.categoriaString = ''

    this.categoriaString = this.categoria
    window.scrollTo(0,0);
    console.log(this.categoria)
    if(this.categoria === "Articulos"){this.categoriaString = "Artículos - Novedades"; }

    if(this.categoria === "Exposicion"){
      this.categoriaString = "Exposición de Objetos"}

      if(this.categoria === "Publicaciones"){
        this.cambioPlantilla = false;
        this.categoriaString = 'Publicaciones en PDF'

      } else {this.cambioPlantilla = true}
          

        })



    this.pedirProductos()


  }




  pedirProductos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.

this.productos = []=[]

    this.crudService.getProductos().subscribe(res =>{
    this.crudService.productos = res as Producto[];  // guardo resultados de la peticion en el servicio
    this.productos = res as Producto[]; // guardo resultados de la peticion en variable productos del este componente.

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

 }


