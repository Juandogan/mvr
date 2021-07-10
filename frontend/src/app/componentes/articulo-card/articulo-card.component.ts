import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';



@Component({
  selector: 'app-articulo-card',
  templateUrl: './articulo-card.component.html',
  styleUrls: ['./articulo-card.component.css']
})
export class ArticuloCardComponent implements OnInit{
  @Input('data')  data:any
  public stringIM : string = '';
  public stringCategoria: string = '';

  constructor(public crudService:CrudService) {

  }



  ngAfterViewInit() {
   }

  ngOnInit(){

    this.stringIM = this.data?.imagen4.slice(8)
    this.stringIM = "https://www.museodelavidarural.com/upload/" +  this.stringIM


if (this.data?.categoria === "Articulos"){
this.data.categoria = "Artículos"

}

if (this.data?.categoria === "Exposicion"){
  this.data.categoria = "Exposición"}




  }

cut(value:string){
  var corte = value.slice(8)

 return corte
};

scrollTop(){
  window.scrollTo(0,0);
}




agregarVista(data:any){
this.crudService.unProducto = data
this.crudService.unProducto.vistas = Number(this.crudService.unProducto.vistas) + 1
console.log('dale',this.crudService.unProducto.vistas)
if( data._id )
{

this.crudService.modificarProducto(this.crudService.unProducto)
.subscribe(res => {
  console.log("modificado  contanor")

                          });

}

else  {
  //  this.crudService.unProducto.vistas = 0
  //    this.crudService.addProducto(this.crudService.unProducto).subscribe(res => { console.log(res) })
}
};
}
