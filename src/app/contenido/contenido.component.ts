import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  id:Number;
  fechapublica:Date;
  texto:string;
  urlimagen:String;
  video:String;

  constructor(id:Number,fechapublica:Date,texto:String,urlimagen:String,video:String) { 
    this.id = id;
    this.fechapublica = fechapublica;
    this.texto = String(texto);
    this.urlimagen = urlimagen;
    this.video = video;
  }

  ngOnInit(): void {
  }

}
