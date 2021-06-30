import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { CrudService } from '../../servicios/crud.service';
import { Producto } from '../../modelos/productos';
import { LocationStrategy, formatCurrency } from '@angular/common';





@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css'],
  providers:[CrudService]
})
export class AdmComponent implements OnInit {

uploadedFiles: Array<File> = [];
public productos:Producto[] = [];
public path : any;
public loading:boolean = true;
public loading2:boolean = false;
public loading3:boolean = false;
public loading4:boolean = false;
public loading5:boolean = false;
public publi2: any ;
public filtro: any ;
public value:any;

tituloShow=false;
subtituloShow=false;
textoShow=false;
imagenShow=false;
archivoShow=false;
fuenteImagenShow=false;
fuenteShow=false;
autorShow=false;
fechaShow=false;
horaShow=false;
lugarShow=false;
abstractShow=false;


filtro_valor = ''

buscar(value: any){
  this.filtro_valor = value;

};


  constructor(public crudService:CrudService, private location: LocationStrategy) {

    history.pushState(null,  window.location.href);
    this.location.onPopState(() => {
      history.pushState(null,  window.location.href);
    });

  }

  ngOnInit(): void {
    window.scrollTo(0,0);

    this.pedirProductos();



  }

  publiForm(publi:any){
    this.publi2 = publi

      }
  pedirProductos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.


    this.crudService.getProductos().subscribe(res =>{
    this.crudService.productos = res as Producto[];  // guardo resultados de la peticion en el servicio
    this.productos = res as Producto[]; // guardo resultados de la peticion en variable productos del este componente.
    this.loading =false

    });//fin de subscribe

    // falta agregar loading

              } //fin de pedirProductos
  openEditor(value:any):void{
this.crudService.unProducto = new Producto
this.crudService.unProducto.categoria = value
    switch (value) {

      case 'Pueblos Originarios':
       this.cerrarForm();
       this.tituloShow=true;
       this.abstractShow=true;
       this.imagenShow=true;
       this.archivoShow=true;
       this.fuenteImagenShow=true;
       this.autorShow=true;

          break;


      case 'Exposicion':
      this.cerrarForm();
      this.tituloShow=true;
      this.subtituloShow=true;
      this.textoShow=true;
      this.imagenShow=true;
      this.fuenteImagenShow=true;
      this.autorShow=true;

         break;

         case 'Muestra':
          this.cerrarForm();
          this.tituloShow=true;
          this.subtituloShow=true;
          this.textoShow=true;
          this.imagenShow=true;
          this.fuenteImagenShow=true;
          this.autorShow=true;

             break;


      case 'Historia Rural':
      this.tituloShow=true;
      this.abstractShow=true;
      this.imagenShow=true;
      this.archivoShow=true;
      this.fuenteImagenShow=true;
      this.autorShow=true;



         break;



      case 'Historias de pueblos':
      this.cerrarForm();
      this.tituloShow=true;
      this.abstractShow=true;
      this.imagenShow=true;
      this.archivoShow=true;
      this.fuenteImagenShow=true;
      this.autorShow=true;

         break;


      case 'Historias de vida y migraciones':
      this.cerrarForm();
      this.tituloShow=true;
      this.abstractShow=true;
      this.imagenShow=true;
      this.archivoShow=true;
      this.fuenteImagenShow=true;
      this.autorShow=true;



         break;


      case 'Ruralidad':
      this.cerrarForm();
      this.tituloShow=true;
      this.abstractShow=true;
      this.imagenShow=true;
      this.archivoShow=true;
      this.fuenteImagenShow=true;
      this.autorShow=true;



         break;

         case 'Patrimonio Rural':
         this.cerrarForm();
         this.tituloShow=true;
         this.abstractShow=true;
         this.imagenShow=true;
         this.archivoShow=true;
         this.fuenteImagenShow=true;
         this.autorShow=true;


            break;
            case 'Reseñas':
         this.cerrarForm();
         this.tituloShow=true;
         this.abstractShow=true;
         this.imagenShow=true;
         this.archivoShow=true;
         this.fuenteImagenShow=true;
         this.autorShow=true;


            break;
            case 'Patrimonio y Educación':
            this.cerrarForm();
            this.tituloShow=true;
            this.abstractShow=true;
            this.imagenShow=true;
            this.archivoShow=true;
            this.fuenteImagenShow=true;
            this.autorShow=true;


               break;

          case 'Naturaleza':
       this.cerrarForm();
       this.tituloShow=true;
       this.abstractShow=true;
       this.imagenShow=true;
       this.archivoShow=true;
       this.fuenteImagenShow=true;
       this.autorShow=true;


          break;
      case 'Actividades':
            this.cerrarForm();
       this.tituloShow=true;

       this.textoShow=true;
      this.imagenShow=true;

       this.fuenteImagenShow=true;

       this.fechaShow=true;
       this.horaShow=true;
       this.lugarShow=true;

          break;
    case 'Archivo':
    this.cerrarForm();
      this.tituloShow=true;
   this.subtituloShow=true;
   this.textoShow=true;
   this.imagenShow=true;
   this.fuenteImagenShow=true;
   this.fuenteShow=true;
     this.autorShow=true;



          break;
      case 'Articulos':
      this.cerrarForm();
        this.tituloShow=true;
       this.subtituloShow=true;
       this.textoShow=true;
       this.imagenShow=true;
       this.fuenteImagenShow=true;
       this.fuenteShow=true;
         this.autorShow=true;

          break;
      case 'Categoria':
        this.cerrarForm()
       this.tituloShow=true;
       this.subtituloShow=true;
       this.imagenShow=true;
       this.archivoShow=true;

          break;
      case 'Consultas':
        this.cerrarForm()
       this.tituloShow=true;
      this.textoShow=true;


          break;

          case 'Videos':
          this.cerrarForm()
          this.tituloShow=true;
          this.textoShow=true;
          this.fuenteImagenShow=true;

            break;

      default:
          console.log("No such day exists!");
          break;
  }
}
    editar(producto:Producto){
      this.crudService.unProducto = producto
      this.crudService.unProducto.categoria = producto.categoria
      switch (producto.categoria) {

        case 'Pueblos Originarios':
         this.cerrarForm();
         this.tituloShow=true;
         this.abstractShow=true;
         this.imagenShow=true;
         this.archivoShow=true;
         this.fuenteImagenShow=true;
         this.autorShow=true;


            break;

        case 'Historia Rural':
        this.cerrarForm();
        this.tituloShow=true;
        this.abstractShow=true;
        this.imagenShow=true;
        this.archivoShow=true;
        this.fuenteImagenShow=true;
        this.autorShow=true;



           break;



        case 'Historia de los pueblos':
        this.cerrarForm();
        this.tituloShow=true;
        this.abstractShow=true;
        this.imagenShow=true;
        this.archivoShow=true;
        this.fuenteImagenShow=true;
        this.autorShow=true;



           break;


        case 'Historias de vida y migraciones':
        this.cerrarForm();
        this.tituloShow=true;
        this.abstractShow=true;
        this.imagenShow=true;
        this.archivoShow=true;
        this.fuenteImagenShow=true;
        this.autorShow=true;



           break;


        case 'Ruralidad':
        this.cerrarForm();
        this.tituloShow=true;
        this.abstractShow=true;
        this.imagenShow=true;
        this.archivoShow=true;
        this.fuenteImagenShow=true;
        this.autorShow=true;

           break;

           case 'Patrimonio Rural':
           this.cerrarForm();
           this.tituloShow=true;
           this.abstractShow=true;
           this.imagenShow=true;
           this.archivoShow=true;
           this.fuenteImagenShow=true;
           this.autorShow=true;

              break;
              case 'Reseñas':
           this.cerrarForm();
           this.tituloShow=true;
           this.abstractShow=true;
           this.imagenShow=true;
           this.archivoShow=true;
           this.fuenteImagenShow=true;
           this.autorShow=true;



              break;
              case 'Muestras':
                this.cerrarForm();
                this.tituloShow=true;
                this.abstractShow=true;
                this.imagenShow=true;
                this.archivoShow=true;
                this.fuenteImagenShow=true;
                this.autorShow=true;



                   break;
              case 'Patrimonio y Educación':
              this.cerrarForm();
              this.tituloShow=true;
              this.abstractShow=true;
              this.imagenShow=true;
              this.archivoShow=true;
              this.fuenteImagenShow=true;
              this.autorShow=true;



                 break;

            case 'Naturaleza':
         this.cerrarForm();
         this.tituloShow=true;
         this.abstractShow=true;
         this.imagenShow=true;
         this.archivoShow=true;
         this.fuenteImagenShow=true;
         this.autorShow=true;


            break;
        case 'Actividades':
        this.tituloShow=true;

         this.textoShow=true;
        this.imagenShow=true;

         this.fuenteImagenShow=true;

         this.fechaShow=true;
         this.horaShow=true;
         this.lugarShow=true;

            break;
      case 'Archivo':
      this.cerrarForm();
          this.tituloShow=true;
         this.subtituloShow=true;
         this.textoShow=true;
         this.imagenShow=true;
         this.fuenteImagenShow=true;
         this.fuenteShow=true;
           this.autorShow=true;


            break;


      case 'Exposicion':
      this.cerrarForm();
      this.tituloShow=true;
      this.subtituloShow=true;
      this.textoShow=true;
      this.imagenShow=true;
      this.fuenteImagenShow=true;
      this.autorShow=true;

         break;
        case 'Articulos':
        this.cerrarForm();
          this.tituloShow=true;
         this.subtituloShow=true;
         this.textoShow=true;
         this.imagenShow=true;
         this.fuenteImagenShow=true;
         this.fuenteShow=true;
           this.autorShow=true;

            break;
        case 'Categoria':
          this.cerrarForm()
         this.tituloShow=true;
         this.subtituloShow=true;
         this.archivoShow=true;
         this.imagenShow=true;

         this.imagenShow=true;

            break;
        case 'Consultas':
          this.cerrarForm()
         this.tituloShow=true;
        this.textoShow=true;


            break;

            case 'Videos':
            this.cerrarForm()
            this.tituloShow=true;
            this.textoShow=true;
            this.fuenteImagenShow=true;

              break;

        default:
            console.log("No such day exists!");
            break;
      }


    // this.crudService.unProducto= producto

       };

      cerrarForm(){


  this.tituloShow=false;
  this.subtituloShow=false;
  this.textoShow=false;
  this.imagenShow=false;
  this.archivoShow=false;
  this.fuenteImagenShow=false;
  this.fuenteShow=false;
  this.autorShow=false;
  this.fechaShow=false;
  this.horaShow=false;
  this.lugarShow=false;
  this.abstractShow=false;


      }

  agregarPublicacion(){
    if( this.crudService.unProducto._id)
    {
    this.crudService.modificarProducto(this.crudService.unProducto)
    .subscribe(res => {

        this.crudService.snack('Modificado!')

                         });


  }

    else  {



         this.crudService.addProducto(this.crudService.unProducto).subscribe(res => { console.log(res) })

  this.crudService.snack('Guardado!')

  this.pedirProductos()}
  };

  resetForm(form:any){
   form.reset()


  };

  onUpload(){
   let formData = new FormData();
    for (let i = 0 ; i  < this.uploadedFiles.length; i++ ){

      formData.append("archivos", this.uploadedFiles[i], this.uploadedFiles[i].name)

    }
    this.crudService.uploadFile(formData).subscribe(res => {
      var ass  = String(res);
      this.crudService.unProducto.imagen4 = ass ;

      console.log(ass);
      this.loading2=false;
      this.loading3=true;
    })

  };

  onUpload2(){
    let formData = new FormData();
     for (let i = 0 ; i  < this.uploadedFiles.length; i++ ){

       formData.append("archivos", this.uploadedFiles[i], this.uploadedFiles[i].name)

     }
     this.crudService.uploadFile(formData).subscribe(res => {
       var ass  = String(res);
       this.crudService.unProducto.imagen5 = ass ;


       this.loading4=false;
       this.loading5=true;
     })

   };

  onFileChange(e:any){

    this.uploadedFiles = e.target.files;
  };

  borrarProducto(producto:any){
   console.log(producto._id)
    this.crudService.deleteProducto(producto._id).subscribe(res => console.log(res));
    this.crudService.snack('Eliminado!')


     this.pedirProductos()

};

}
