import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-laterl-articulo',
  templateUrl: './laterl-articulo.component.html',
  styleUrls: ['./laterl-articulo.component.css']
})
export class LaterlArticuloComponent implements OnInit {
  @Input('data')  data:any
  public stringIM : string = '';

  constructor() {

  }

  ngOnInit(){

    this.stringIM = this.data?.imagen4.slice(8)
    this.stringIM = "https://www.museodelavidarural.com/upload/" +  this.stringIM

    console.log('asa', this.stringIM)
  }

}
