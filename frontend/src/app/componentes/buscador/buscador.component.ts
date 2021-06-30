import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public value:any;
  buscar = new FormControl('')

  constructor() { }

  ngOnInit(): void {

    this.buscar.valueChanges.pipe(debounceTime(300)).subscribe(value => this.buscarEmitter.emit(value))
  }

@Output('buscar') buscarEmitter = new EventEmitter<string>();



}






