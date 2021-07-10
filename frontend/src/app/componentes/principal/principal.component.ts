import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Producto } from 'src/app/modelos/productos';
import { CrudService } from 'src/app/servicios/crud.service';
import { timer, Subject,  } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  scrollPosition: any
  scroll:any
  productos: any
  loader:any;
  public clientes$ = new Subject<number>();
  clientes:number = 0

  constructor(public crudService:CrudService) { }

  @HostListener("scroll", ['$event'])


  ngOnInit() {
        this.crudService.$loading.emit(true)
        this.crudService.$loading.subscribe(res => this.loader = res)
        this.pedirProductos()
        var az = Number(localStorage.getItem('pedidos'))
        // window.scrollTo(0,az);
  }

  pedirProductos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.

this.productos = []=[]
this.loader=true
    this.crudService.getProductos().subscribe(res =>{
    this.crudService.productos = res as Producto[];  // guardo resultados de la peticion en el servicio
    this.productos = res as Producto[]; // guardo resultados de la peticion en variable productos del este componente.
    console.log(this.productos)
    this.crudService.$loading.emit(false)


    });//fin de subscribe


    // falta agregar loading

              } //fin de pedirProductos


  ngOnDestroy(){
    var aux = window.pageYOffset
    localStorage.setItem('pedidos', JSON.stringify(aux));
    this.crudService.$loading.emit(true)
   }

  //  ngAfterViewInit() {
  //
  //   }

evento($event:any)
{
  if ( window.pageYOffset > 210) {
    this.crudService.scrolled = true;}
    else {this.crudService.scrolled =false}




  };


}
