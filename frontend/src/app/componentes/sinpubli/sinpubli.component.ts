import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sinpubli',
  templateUrl: './sinpubli.component.html',
  styleUrls: ['./sinpubli.component.css']
})
export class SinpubliComponent implements OnInit {

  public loading:boolean = true;

  
  public vacio:boolean = false
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  cancel() {
    
    this.location.back(); // <-- go back to previous location on cancel
    }
}
