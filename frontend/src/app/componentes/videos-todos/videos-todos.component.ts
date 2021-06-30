import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-videos-todos',
  templateUrl: './videos-todos.component.html',
  styleUrls: ['./videos-todos.component.css']
})
export class VideosTodosComponent implements OnInit {
  @Input('data')  data:any
  public stringIM : string = '';

  constructor(public crudService:CrudService) {

  }

  ngOnInit(){

    this.stringIM = this.data?.imagen4.slice(8)
    this.stringIM = "http://www.museodelavidarural.com/upload/" +  this.stringIM

    console.log('asa', this.stringIM)
  }

cut(value:string){
  var corte = value.slice(8)

 return corte
};


}
