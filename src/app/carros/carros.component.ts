import { Component, OnInit } from '@angular/core';
import { AutosService } from '../servicios/autos.service';
import { carro } from '../interfaces/carro.interfaces';
import {  Router } from '@angular/router';

import { getAuth } from '@firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit{
  
  public car:carro[]=[];
  public car1:carro|undefined;
  public Modelo:string='';
  mostrarElemento:boolean=false
  constructor(private carros:AutosService,private route:Router,private fire:AngularFirestore ){}
  
  
  ngOnInit(): void {
    this.carros.getcarros().subscribe(
      (auto:unknown[]) =>{
      const carros: carro[] = auto as carro[];

      this.car=carros;
  
    }
    );
  }

  getcarrosbynombre(){
    if(this.Modelo){
      this.carros.getcarrosbynombre(this.Modelo).subscribe(
        (auto:unknown[]) =>{
          const carros: carro[] = auto as carro[];
          console.log(carros)
          this.car=carros;
          if(!this.carros||this.car.length === 0){
            this.mostrarElemento=true;
            setTimeout(() => {
              this.route.navigate(['/aboutus']);
            }, 3000); 
            setTimeout(() => {
              this.route.navigate(['/home']);
            }, 10000);
            }}
          
      )
    }else{
      return
    }
}


RESERVA(car:carro){
  
  const auth=getAuth();
  const user=auth.currentUser;
  
  if(user){
   this.carros.setcarro(car);
    this.route.navigate(['/reservar']);
    
  }else{
    this.route.navigate(['/login']);
  }
 
}
}