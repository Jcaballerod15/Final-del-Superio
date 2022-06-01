import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { VerClaseComponent } from './ver-clase/ver-clase.component';
import { VerUserComponent } from './ver-user/ver-user.component';


const routes: Routes = [
{ path: 'clase', component: VerClaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
