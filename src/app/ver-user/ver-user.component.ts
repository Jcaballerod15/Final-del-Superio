import { Component, Input, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-ver-user',
  templateUrl: './ver-user.component.html',
  styleUrls: ['./ver-user.component.css']
})
export class VerUserComponent implements OnInit {

  @Input() usuariosfin:UserComponent;
  @Input() indice:Number;
  hablitarCuadro1 = true;
  hablitarCuadro2 = true;
  emailviejo:String;
  rol:String;

  constructor(private cookieService: CookieService) { 
    this.usuariosfin= Input();
    this.indice = Input();
    this.emailviejo = this.cookieService.get('email');
    this.rol = this.cookieService.get('rol');
  }
  ngOnInit(): void {
  }
  editado(){
    let form = document.getElementById("formulario1");
    this.emailviejo = this.usuariosfin.email;
    this.cookieService.set('email',String(this.emailviejo));
    location.reload();
  }
  setCudaro1(){
    
    if(this.hablitarCuadro1 == true){
      this.hablitarCuadro1 = false;
    }else{
      this.hablitarCuadro1 = true;
    }
  }
  setCudaro2(){
    
    if(this.hablitarCuadro2 == true){
      this.hablitarCuadro2 = false;
    }else{
      this.hablitarCuadro2 = true;
    }
  }
}
