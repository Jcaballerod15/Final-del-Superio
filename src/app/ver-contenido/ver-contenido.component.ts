import { Component, OnInit, Input} from '@angular/core';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ContenidoComponent } from '../contenido/contenido.component';

@Component({
  selector: 'app-ver-contenido',
  templateUrl: './ver-contenido.component.html',
  styleUrls: ['./ver-contenido.component.css']
})
export class VerContenidoComponent implements OnInit {

  @Input() contenidosfin:ContenidoComponent;
  @Input() indice:Number;
  emailviejo:String;
  rol:String;

  constructor(private cookieService: CookieService) { 
    this.contenidosfin= Input();
    this.indice = Input();
    this.emailviejo = this.cookieService.get('email');
    this.rol = this.cookieService.get('rol');
  }

  ngOnInit(): void {
  }

}
