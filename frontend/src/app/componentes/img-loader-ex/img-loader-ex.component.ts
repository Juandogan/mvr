import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-loader-ex',
  templateUrl: './img-loader-ex.component.html',
  styleUrls: ['./img-loader-ex.component.css']
})
export class ImgLoaderExComponent   {

  @Input() loader:string='';
  @Input() height:number=400;
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
