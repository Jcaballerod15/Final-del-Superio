import { Component, Input, OnInit } from '@angular/core';
import { ClaseComponent } from '../clase/clase.component';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-ver-clasesusuarios',
  templateUrl: './ver-clasesusuarios.component.html',
  styleUrls: ['./ver-clasesusuarios.component.css']
})
export class VerClasesusuariosComponent implements OnInit {

  @Input() userfin:UserComponent;
  @Input() indice:Number;
  emailviejo:String;
  rol:String;

  constructor(private cookieService: CookieService) {
    this.userfin= Input();
    this.indice = Input();
    this.emailviejo = this.cookieService.get('email');
    this.rol = this.cookieService.get('rol');
   }

  ngOnInit(): void {
  }
  verSala(userfin:Number){

  }
}
