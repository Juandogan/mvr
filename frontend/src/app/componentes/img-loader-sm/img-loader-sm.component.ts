import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-loader-sm',
  templateUrl: './img-loader-sm.component.html',
  styleUrls: ['./img-loader-sm.component.css']
})
export class ImgLoaderSMComponent  {

  @Input() loader:string='';
  @Input() height:number=104;
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
