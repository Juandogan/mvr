export class Producto {

  constructor(_id='', subtitulo='', titulo='', imagen='',imagen2='',imagen3='',imagen4='',imagen5='', description='', description2='', description3='a', description4='', description5='', creado=new Date(), vistas=0, categoria=""){

      this._id = _id;

         this.titulo = titulo;
         this.subtitulo = subtitulo;
         this.imagen1 = imagen;
         this.imagen2 = imagen2;
         this.imagen3 = imagen3;
         this.imagen4 = imagen4;
         this.imagen5 = imagen5;
         this.descripcion1 = description;
         this.descripcion2 = description2;
         this.descripcion3 = description3;
         this.descripcion4 = description4;
         this.descripcion5 = description5;
         this.categoria = categoria;
         this.vistas = vistas;
         this.creado = creado






     }



     _id:string
     vistas: Number;
     categoria: String;
     titulo: String;
     subtitulo: String;
     imagen1: String;
     imagen2: String;
     imagen3: String;
     imagen4: String;
     imagen5: String;


     descripcion1: String;
     descripcion2: String;
     descripcion3: String;
     descripcion4: String;
     descripcion5: String;


     creado:Date;


 }




