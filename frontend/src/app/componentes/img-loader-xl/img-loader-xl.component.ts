import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-loader-xl',
  templateUrl: './img-loader-xl.component.html',
  styleUrls: ['./img-loader-xl.component.css']
})
export class ImgLoaderXLComponent {

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
