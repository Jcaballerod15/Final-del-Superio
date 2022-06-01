import { Injectable } from '@angular/core';
import { ClaseComponent } from './clase/clase.component';
import { HttpClient } from "@angular/common/http";
import { ContenidoComponent } from './contenido/contenido.component';
import { UserComponent } from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  constructor(private http: HttpClient) { 
    
  }
  getClasesUser(email:string){
    return this.http.get<Array<ClaseComponent>>('http://10.0.2.15:8000/api/clasesuser/'+email);
    
  }
  getClasesProfe(email:string){
    return this.http.get<Array<ClaseComponent>>('http://10.0.2.15:8000/api/clasesprofe/'+email);
    
  }
  getClases(){
    return this.http.get<Array<ClaseComponent>>('http://10.0.2.15:8000/api/verclases');
    
  }
  unirserClase(email:string){
    return this.http.get<Array<ClaseComponent>>('http://10.0.2.15:8000/api/usuario/'+email);
    
  }
  getContenido(idclase:string){
    return this.http.get<Array<ContenidoComponent>>('http://10.0.2.15:8000/api/vercontenido/'+idclase);
  }
  getUserClase(idclase:string){
    return this.http.get<Array<UserComponent>>('http://10.0.2.15:8000/api/usuariosclase/'+idclase);
  }
  getBuscarClase(texto:string){
    return this.http.get<Array<ClaseComponent>>('http://10.0.2.15:8000/api/buscarclase/'+texto); 
  }
}
