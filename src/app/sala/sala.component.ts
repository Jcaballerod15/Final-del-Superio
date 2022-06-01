import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  id:Number;
  nombrereceptor:String;
  emailreceptor:String;
  
  constructor(id:Number,nombrereceptor:String,emailreceptor:String) { 
    this.id = id;
    this.nombrereceptor = nombrereceptor;
    this.emailreceptor = emailreceptor;
  }

  ngOnInit(): void {
  }

}
