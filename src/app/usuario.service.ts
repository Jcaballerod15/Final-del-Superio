import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DatosloginComponent } from './datoslogin/datoslogin.component';
import { UserComponent } from './user/user.component';
import { SalaComponent } from './sala/sala.component';
import { MensajeComponent } from './mensaje/mensaje.component';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}
  getUsers(email:string){
    return this.http.get<Array<UserComponent>>('http://10.0.2.15:8000/api/usuario/'+email);
    
  }
  login(email:string, pass:string){
    
    return this.http.get<DatosloginComponent>('http://10.0.2.15:8000/api/login/'+email+'/'+pass);
  }
  getSalas(email:string){
    return this.http.get<Array<SalaComponent>>('http://10.0.2.15:8000/api/salaschat/'+email);
  }
  getMensa(sala:string,email:string){
    return this.http.get<Array<MensajeComponent>>('http://10.0.2.15:8000/api/mensaje/'+sala+'/'+email);
  }
}
