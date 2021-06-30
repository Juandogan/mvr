import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../../../app/servicios/crud.service'
import { Producto } from '../../../app/modelos/productos';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {



  public productos:Producto[]=[];
  public loading:boolean = true;
  public nroPublicaciones:any;
  public aux:number=0
  public vacio:boolean = false


  constructor(public crudService: CrudService) { }
    ngOnInit(): void {
    window.scrollTo(0,0);
    this.pedirProductos();

  }

  agregarVista(value:any){
    this.crudService.unProducto = value
  this.crudService.unProducto.vistas = Number(this.crudService.unProducto.vistas) + 1
  console.log('dale',this.crudService.unProducto.vistas)
  if( value._id )
  {

  this.crudService.modificarProducto(this.crudService.unProducto)
  .subscribe(res => { });
}
  else  {
}
};



  pedirProductos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.


    this.crudService.getProductos().subscribe(res =>{
    this.crudService.productos = res as Producto[];  // guardo resultados de la peticion en el servicio
    this.productos = res as Producto[]; // guardo resultados de la peticion en variable productos del este componente.
    this.loading =false
    });//fin de subscribe
    this.aux = Number(this.crudService.numeroPublicaciones(this.productos, 'Historia rural y de los pueblos'))

    if (this.aux === 0 ){ this.vacio = true}else{this.vacio = false}
    // falta agregar loading

              } //fin de pedirProductos




cut(value:any){
  var corte = value.slice(8)

  return corte
             };

}

