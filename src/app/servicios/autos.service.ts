import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { carro } from '../interfaces/carro.interfaces';


@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private selectedCar: carro|null=null ;
  constructor( private anguf:AngularFirestore) { }

getcarros(){
  return this.anguf.collection('carros').valueChanges();
}

getcarrosbynombre(Modelo:string){
  return this.anguf.collection('carros',ref=>ref.where('Modelo','==',Modelo)).valueChanges();
}

setcarro(car: carro){
  this.selectedCar = car;
}
getcarro():carro|null{
  return this.selectedCar;
}

getCarroById() {
  return this.anguf.collection('carros').doc('Modelo').valueChanges();
}
}
