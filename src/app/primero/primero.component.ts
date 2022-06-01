import { Component, OnInit } from '@angular/core';
import { ClaseComponent } from '../clase/clase.component';
import { UserComponent } from '../user/user.component';
import { Injectable } from '@angular/core';
import {enableProdMode} from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { DatosloginComponent } from '../datoslogin/datoslogin.component';
import { CookieService } from 'ngx-cookie-service';
import { ClaseService } from '../clase.service';
import { ContenidoComponent } from '../contenido/contenido.component';
import { SalaComponent } from '../sala/sala.component';
import { MensajeComponent } from '../mensaje/mensaje.component';

enableProdMode();

@Injectable({
  providedIn: 'root',
})


@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent implements OnInit {

  clas:Array<ClaseComponent>;
  usuarios:Array<UserComponent>;
  usuariosclase:Array<UserComponent>;
  contenido:Array<ContenidoComponent>;
  salasuser:Array<SalaComponent>;
  todaslasclases:Array<ClaseComponent>;
  mesnajes:Array<MensajeComponent>;
  usuario:UserComponent;
  login:string = "0";
  vistaactual:string = "user";
  vistasecundaria:string = "";
  rol:string = "";
  gmail:string = "";
  // datos:JSON[] = [];
  claseactual:string = "-1";
  salaactual:string = "-1";
  datos:DatosloginComponent;

  constructor(public usersService: UsuarioService, private cookieService: CookieService, public claseService: ClaseService) { 
    this.usuarios = []; 
    this.clas = [];
    this.mesnajes = [];
    this.salasuser=[];
    this.contenido = [];
    this.usuariosclase=[];
    this.todaslasclases=[];
    this.datos = new DatosloginComponent(false,"");
    this.usuario = new UserComponent(-1,"","");

  }

  ngOnInit(): void {
    
    this.login = this.cookieService.get('login');
    this.gmail = this.cookieService.get('email');
    this.rol = this.cookieService.get('rol');
    this.vistaactual = this.cookieService.get('vistaactual');
    this.claseactual = this.cookieService.get('claseactual');
    this.salaactual = this.cookieService.get('salaactual');
    // this.vistasecundaria = "";
    // this.vistasecundaria = this.cookieService.get('vistasecon');
    if(this.login=="1" && this.vistaactual=="user"){
      this.getuser();
    }else if(this.login=="1" && this.vistaactual=="clase"){
      this.clases();
      if(this.claseactual!="-1"){
        this.verContenido();
      }
    }else if(this.login=="1" && this.vistaactual=="sala"){
      this.salas();
      if(this.salaactual!="-1"){
        this.verMensa();
      }
    }
  }
  async alogout(){
    this.login = "0";
    this.cookieService.set('login',this.login);
    this.gmail = "";
    this.cookieService.set('email',this.gmail);
    this.rol = "";
    this.cookieService.set('rol',this.rol);
    this.vistaactual = "user";
    this.cookieService.set('vistaactual',this.vistaactual);
    this.claseactual = "-1";
    this.cookieService.set('claseactual',this.claseactual);
    location.reload();

  }
  async alogin(email:string,pass:string){
    let pdatos:DatosloginComponent;
    pdatos = new DatosloginComponent(false,"");
    this.esperarInicio(email,pass);
      setTimeout(()=>{
      console.log(this.datos);
      if(this.datos.ok==true){
          this.login = "1";
          this.gmail = email;
          this.rol = String(this.datos.rol);
          this.cookieService.set('login',this.login);
          this.cookieService.set('email',this.gmail);
          this.cookieService.set('rol',String(this.datos.rol));
          location.reload();
    
      }else{
          
          window.alert("Error al inicar sesión");
      }
    },5000);
  }
  esperarInicio(email:string,pass:string){
    this.usersService.login(email,pass).subscribe(data => {
      // console.log(data.ok);
      this.datos=data;
    });
    
  }
  async getuser(){
    this.vistaactual="user";
    this.claseactual = "-1";
    this.cookieService.set('claseactual',this.claseactual);
    this.cookieService.set('vistaactual',this.vistaactual);
    this.usersService.getUsers(this.gmail).subscribe(data => {
      // console.log(data);
      this.usuarios=data;
      // <onsole.log(this.usuarios[0].email);
    });
  }
  async clases(){
    this.vistaactual="clase";
    this.cookieService.set('vistaactual',this.vistaactual);
    // this.claseactual = "-1";
    // this.cookieService.set('claseactual',this.claseactual);
    this.vistasecundaria="";
    if(this.rol=="ROLE_PROFE"){
      this.claseService.getClasesProfe(this.gmail).subscribe(data => {
        this.clas=data;
      });
    }else{
      this.claseService.getClasesUser(this.gmail).subscribe(data => {
        this.clas=data;
      });
    }
  }
  async salas(){
    this.vistaactual="sala";
    this.cookieService.set('vistaactual',this.vistaactual);
    // this.claseactual = "-1";
    // this.cookieService.set('claseactual',this.claseactual);
    this.vistasecundaria="";
      this.usersService.getSalas(this.gmail).subscribe(data => {
        this.salasuser=data;
        // console.log(this.salasuser);
      });
    
  }
  async crearClase(){
    this.vistasecundaria="crearclase";
  }
  async verContenido(){
    this.vistasecundaria="contenidoclase";
    // console.log(this.claseactual);
    this.claseService.getContenido(this.claseactual).subscribe(data => {
      this.contenido=data;
      // console.log(data);
    });
    this.claseService.getUserClase(this.claseactual).subscribe(data => {
      this.usuariosclase=data;
      // console.log(data);
    });
  }
  async verMensa(){
    this.vistasecundaria="mensa";
    this.usersService.getMensa(this.salaactual, this.gmail).subscribe(data => {
      this.mesnajes=data;
      // console.log(data[0]);
    });
  }
  async crearContenido(){
    this.vistasecundaria="crearcontenido";
  }
  async verClases(){
    this.vistasecundaria="todaslasclases";
    this.claseService.getClases().subscribe(data => {
      this.todaslasclases=data;
      // console.log(data[0]);
    });
  }
  async buscarClase(texto:string){
    this.vistasecundaria="todaslasclases";
    this.claseService.getBuscarClase(texto).subscribe(data => {
      this.todaslasclases=data;
      // console.log(data[0]);
    });
  }

}
