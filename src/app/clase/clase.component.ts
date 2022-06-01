import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.css']
})
export class ClaseComponent implements OnInit {

  id:Number;
  descrip:String;
  titulo:String;
  idprofe:String;
  
  constructor(id:Number,descrip:String,titulo:String,idprofe:String) { 
    this.id = id;
    this.descrip = descrip;
    this.titulo = titulo;
    this.idprofe = idprofe;
  }

  ngOnInit(): void {
  }

}
