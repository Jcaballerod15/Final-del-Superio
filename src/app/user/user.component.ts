import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id:Number;
  nombre:String;
  email:String;
  

  constructor(id:Number,nombre:String,email:String) { 
    this.id = id;
    this.nombre = nombre;
    this.email = email;
  }

  ngOnInit(): void {
  }

}
