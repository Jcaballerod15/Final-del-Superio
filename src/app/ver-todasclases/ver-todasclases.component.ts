import { Component, OnInit, Input} from '@angular/core';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ClaseComponent } from '../clase/clase.component';

@Component({
  selector: 'app-ver-todasclases',
  templateUrl: './ver-todasclases.component.html',
  styleUrls: ['./ver-todasclases.component.css']
})
export class VerTodasclasesComponent implements OnInit {

  @Input() todasclases:ClaseComponent;
  @Input() indice:Number;
  emailviejo:String;
  rol:String;

  constructor(private cookieService: CookieService) { 
    this.todasclases= Input();
    this.indice = Input();
    this.emailviejo = this.cookieService.get('email');
    this.rol = this.cookieService.get('rol');
  }

  ngOnInit(): void {
  }

}
