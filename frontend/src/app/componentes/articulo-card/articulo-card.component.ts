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

  constructor(public crudService:CrudService) {

  }

  ngOnInit(){

    this.stringIM = this.data?.imagen4.slice(8)
    this.stringIM = "http://www.museodelavidarural.com/upload/" +  this.stringIM


  }

cut(value:string){
  var corte = value.slice(8)

 return corte
};

scrollTop(){
  window.scrollTo(0,0);
}

}
