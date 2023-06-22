import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoPipe } from './video.pipe';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from'@angular/fire/compat'
import {AngularFirestoreModule} from'@angular/fire/compat/firestore'
import { provideAuth,getAuth } from '@angular/fire/auth';
import { CarrosComponent } from './carros/carros.component';
import { RESERVARComponent } from './reservar/reservar.component';
import { MreservasComponent } from './mreservas/mreservas.component';
import { AccesibilidadComponent } from './accesibilidad/accesibilidad.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { AdminComponent } from './admin/admin.component';
import { LgadminComponent } from './lgadmin/lgadmin.component';
import { NavbarlatComponent } from './navbarlat/navbarlat.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../src/environments/environment';




const firebaseConfig = {
  apiKey: "AIzaSyBHztH8NptI7E8aCBjIzdtSdwdqRR-wNHk",
  authDomain: "dirivet-36979.firebaseapp.com",
  projectId: "dirivet-36979",
  storageBucket: "dirivet-36979.appspot.com",
  messagingSenderId: "666878580827",
  appId: "1:666878580827:web:4041aba1c268c2985fc77e"
};


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomeComponent,
    NavbarComponent,
    VideoPipe,
    LoginComponent,
    SingupComponent,
    CarrosComponent,
    RESERVARComponent,
    MreservasComponent,
    AccesibilidadComponent,
    AyudaComponent,
    ContactanosComponent,
    AdminComponent,
    LgadminComponent,
    NavbarlatComponent,
    GraficasComponent,

    
     
    
   
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideAuth(()=>getAuth()),
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



