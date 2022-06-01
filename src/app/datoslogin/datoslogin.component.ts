import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-datoslogin',
  templateUrl: './datoslogin.component.html',
  styleUrls: ['./datoslogin.component.css']
})
export class DatosloginComponent implements OnInit {

  ok:Boolean;
  // user:UserComponent;
  rol:String;

  constructor(oke:Boolean,rol:String) { 
    this.ok = oke;
    // this.user = user;
    this.rol = rol;
  }

  ngOnInit(): void {
  }
  getok(){
    return this.ok;
  }
}
