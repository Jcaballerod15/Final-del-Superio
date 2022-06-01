import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClaseComponent } from './clase/clase.component';
import { PrimeroComponent } from './primero/primero.component';
import { UserComponent } from './user/user.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { VerUserComponent } from './ver-user/ver-user.component';
import { DatosloginComponent } from './datoslogin/datoslogin.component';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { VerClaseComponent } from './ver-clase/ver-clase.component';
import { VerContenidoComponent } from './ver-contenido/ver-contenido.component';
import { VerClasesusuariosComponent } from './ver-clasesusuarios/ver-clasesusuarios.component';
import { VerTodasclasesComponent } from './ver-todasclases/ver-todasclases.component';
import { SalaComponent } from './sala/sala.component';
import { VerSalaComponent } from './ver-sala/ver-sala.component';
import { VerMensajeComponent } from './ver-mensaje/ver-mensaje.component';
import { MensajeComponent } from './mensaje/mensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    ClaseComponent,
    PrimeroComponent,
    UserComponent,
    ContenidoComponent,
    VerUserComponent,
    DatosloginComponent,
    VerClaseComponent,
    VerContenidoComponent,
    VerClasesusuariosComponent,
    VerTodasclasesComponent,
    SalaComponent,
    VerSalaComponent,
    VerMensajeComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
