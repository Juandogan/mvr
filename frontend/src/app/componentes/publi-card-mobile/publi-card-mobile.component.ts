import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publi-card-mobile',
  templateUrl: './publi-card-mobile.component.html',
  styleUrls: ['./publi-card-mobile.component.css']
})
export class PubliCardMobileComponent implements OnInit {

  @Input('data')  data:any

  public stringIM : string = '';

  constructor() {

  }

  ngOnInit(){

    this.stringIM = this.data?.imagen4.slice(8)
    this.stringIM = "https://www.museodelavidarural.com/upload/" +  this.stringIM


  }

cut(value:string){
  var corte = value.slice(8)

 return corte
};


}
