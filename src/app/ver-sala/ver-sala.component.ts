import { Component, Input, OnInit } from '@angular/core';
import { ClaseComponent } from '../clase/clase.component';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SalaComponent } from '../sala/sala.component';

@Component({
  selector: 'app-ver-sala',
  templateUrl: './ver-sala.component.html',
  styleUrls: ['./ver-sala.component.css']
})
export class VerSalaComponent implements OnInit {

  @Input() salasfin:SalaComponent;
  @Input() indice:Number;
  emailviejo:String;
  rol:String;

  constructor(private cookieService: CookieService) {
    this.salasfin= Input();
    this.indice = Input();
    this.emailviejo = this.cookieService.get('email');
    this.rol = this.cookieService.get('rol');
   }

  ngOnInit(): void {
  }
  verMensaje(id:Number){
    this.cookieService.set('salaactual',String(id));
    // console.log(this.cookieService.get('salaactual'));
    location.reload();
  }
}
