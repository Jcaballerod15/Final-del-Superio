import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  id:Number;
  emailemisor:String;
  texto:String;
  fecha:String;

  constructor(id:Number,emailemisor:String,texto:String,fecha:Date) { 
    this.id = id;
    this.emailemisor = emailemisor;
    this.texto = texto;
    this.fecha = String(fecha);
  }

  ngOnInit(): void {
  }

}
