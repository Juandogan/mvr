import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articulo-card-desktop',
  templateUrl: './articulo-card-desktop.component.html',
  styleUrls: ['./articulo-card-desktop.component.css']
})
export class ArticuloCardDesktopComponent implements OnInit {

  @Input('data')  data:any

  public stringIM : string = '';

  constructor() {

  }

  ngOnInit(){

    this.stringIM = this.data?.imagen4.slice(8)
    this.stringIM = "http://www.museodelavidarural.com/upload/" +  this.stringIM


  }

cut(value:string){
  var corte = value.slice(8)

 return corte
};


}
