import { Component, Input, OnInit } from '@angular/core';
import { ClaseComponent } from '../clase/clase.component';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-ver-clase',
  templateUrl: './ver-clase.component.html',
  styleUrls: ['./ver-clase.component.css']
})
export class VerClaseComponent implements OnInit {

  @Input() clasesfin:ClaseComponent;
  @Input() indice:Number;
  emailviejo:String;
  rol:String;

  constructor(private cookieService: CookieService) {
    this.clasesfin= Input();
    this.indice = Input();
    this.emailviejo = this.cookieService.get('email');
    this.rol = this.cookieService.get('rol');
   }

  ngOnInit(): void {
  }
  verContenido(id:Number){
    this.cookieService.set('claseactual',String(id));
    location.reload();
  }

}
