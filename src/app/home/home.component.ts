import { Component } from '@angular/core';
import { carro } from '../interfaces/carro.interfaces';
import { AutosService } from '../servicios/autos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  public car:carro[]=[];
  public Modelo:string=';'

  constructor(private carros:AutosService){}
  
  getcarrosbynombre(){
    if(this.Modelo){
      this.carros.getcarrosbynombre(this.Modelo).subscribe(
        (auto:unknown[]) =>{
          const carros: carro[] = auto as carro[];
          console.log(carros)
          this.car=carros;}
      )
    }else{
      return
    }
}
}
