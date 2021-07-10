import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelos/productos';
import * as moment from 'moment'
import { of } from "rxjs"
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class CrudService {

  readonly URL_API  = "https://www.museodelavidarural.com/productos";

  $loading = new EventEmitter<boolean>();

  unProducto:Producto;
  productos: Producto[] =[];
  loading= true;
  scroll=false;
  scrollPosition: any
  scrolled:any
  constructor(private http:HttpClient, public snackBar:MatSnackBar) {

    this.unProducto = new Producto();

  }


  getProductos() {
    // var precio:number = Number(this.pedido.precio)    no se pa que funciona
    return this.http.get(this.URL_API);

  };

  getOneCard(_id:any){
    return this.http.get(this.URL_API + `/${_id}`);
  }

  addProducto(productos:Producto) {
    return this.http.post(this.URL_API, productos);


  };

  cut(value:string){
    var corte = value.slice(8)

   return corte
 };

  modificarProducto(productos:Producto) {
    return this.http.put(this.URL_API + `/${productos._id}` , productos);

  };

  deleteProducto(_id:string) {
    return this.http.delete(this.URL_API + `/${_id}`);

  };

uploadFile(formData:any){
  return this.http.post('/upload', formData)

}


 snack(value:any){
   this.snackBar.open(value,'',{duration:2000, horizontalPosition:'center', verticalPosition:'bottom',   panelClass: ['blue-snackbar']})

}



numeroPublicaciones(value:any[]=[], arg:any): any {

  if(arg ==='' || arg.length < 0 ) return value;

const resultPost =[];
var todo:string;

for(const categoria of value){

var todo:string = categoria.imagen3 + categoria.categoria;


  if(todo.indexOf(arg) >-1 ){
    resultPost.push(categoria);



};

};


this.productos = resultPost

return resultPost.length; };

fechaPipe(value:Date){

  let requerido = moment(value);
  let creacion = moment();
  let dias = creacion.diff(requerido,'minutes');


if( dias > 59){
  let requerido = moment(value);
  let creacion = moment();
  let dias = creacion.diff(requerido,'hours');

    if( dias > 24){
          let requerido = moment(value);
        let creacion = moment();
        let dias = creacion.diff(requerido,'days');

      return dias + 'd'
 }

  return dias + 'h'
 }


return dias +'m'
}

inicioBarra(){
  window.scroll(0,0)
this.scrolled =false

}

}//FIN DE CLASE GENERAL
