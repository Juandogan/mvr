import { R3TargetBinder } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent implements OnInit {

  public color= 'rgba(204, 204, 204, 0.288)'
  public centrado = true
  public radius = 20

  constructor(public crudService:CrudService) { }

  ngOnInit(): void {

  }

  inicioBarra(){
    window.scroll(0,0)
  this.crudService.scrolled =false

  }
}
