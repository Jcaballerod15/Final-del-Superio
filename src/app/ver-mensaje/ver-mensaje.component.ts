import { Component, OnInit, Input} from '@angular/core';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ContenidoComponent } from '../contenido/contenido.component';
import { MensajeComponent } from '../mensaje/mensaje.component';

@Component({
  selector: 'app-ver-mensaje',
  templateUrl: './ver-mensaje.component.html',
  styleUrls: ['./ver-mensaje.component.css']
})
export class VerMensajeComponent implements OnInit {

  @Input() mensajesfin:MensajeComponent;
  @Input() indice:Number;
  emailviejo:String;
  rol:String;

  constructor(private cookieService: CookieService) { 
    this.mensajesfin= Input();
    this.indice = Input();
    this.emailviejo = this.cookieService.get('email');
    this.rol = this.cookieService.get('rol');
  }

  ngOnInit(): void {
  }

}
