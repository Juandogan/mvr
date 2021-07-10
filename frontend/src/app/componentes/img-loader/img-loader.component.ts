import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-loader',
  templateUrl: './img-loader.component.html',
  styleUrls: ['./img-loader.component.css']
})
export class ImgLoaderComponent  {

  @Input() loader:string='';
  @Input() height:number=200;
  @Input() width:number=100;
  @Input() image:string='';

  isLoading:boolean;
  imagenEstado=false;

  constructor() {
    this.isLoading=true;
  }

  hideLoader(){
    this.isLoading=false;
    this.imagenEstado = true;
  }

}
