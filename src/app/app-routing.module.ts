import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import{canActivate}from'@angular/fire/auth-guard'
import {RESERVARComponent } from './reservar/reservar.component'
import { MreservasComponent } from './mreservas/mreservas.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { LgadminComponent } from './lgadmin/lgadmin.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarlatComponent } from './navbarlat/navbarlat.component';
import { GraficasComponent } from './graficas/graficas.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'reservar', component:RESERVARComponent },
  { path: 'editares/:id', component:RESERVARComponent },
  { path: 'meservas', component:MreservasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'aboutus', component: AboutusComponent },
  {path:'contactanos',component:ContactanosComponent},
  {path:'lgadmin',component:LgadminComponent},
  {path:'admin',component:AdminComponent},
  {path:'navbarlat',component:NavbarlatComponent},
  {path:'graficas',component:GraficasComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
