import { Component } from '@angular/core';
import { ReservaService } from '../servicios/reserva.service';
import { reserva } from '../interfaces/reserva.interface';

@Component({
  selector: 'app-mreservas',
  templateUrl: './mreservas.component.html',
  styleUrls: ['./mreservas.component.css']
})
export class MreservasComponent {
   reservar:reserva[]=[];
  
  constructor(private res:ReservaService){

  }

  ngOnInit(): void{
    this.res.getreservas().subscribe((rese:unknown[])=>{
    const rs1:reserva[]=rese as reserva[];
    this.reservar=rs1;
    console.log(this.reservar);  
  })
  }


  delete(id:string) {
    this.res.borrar(id).then(
      ()=>{console.log('Reserva eliminada')
    }).catch(error=>{
      console.log(error)
    })

  }



}
