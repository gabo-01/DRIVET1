import { Component } from '@angular/core';
import { VideoPipe } from '../video.pipe';
import { carro } from '../interfaces/carro.interfaces';
import { AutosService } from '../servicios/autos.service';
import { AccesibilidadService } from '../servicios/accesibilidad.service';



@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
 
})
export class AboutusComponent {
  videoUrl ='https://www.youtube.com/embed/yNPCQl5yTH4'

  public car:carro[]=[];
  textToRead: string="";

  constructor(private carros:AutosService,public accser:AccesibilidadService){}

  ngOnInit(): void {
    this.carros.getcarros().subscribe(
      (auto:unknown[]) =>{
      const carros: carro[] = auto as carro[];

      this.car=carros;
    }

    );
    this.textToRead = "ACERCA DE NOSOTROS Somos una empresa dedicada a la renta de vehiculos por un precio mas accesible y lideres en el mercado actualmente, es un proyecto de carácter universitario. EQUIPO Fernando Gabriel Martinez Garcia VEHICULOS DISPONIBLES Marca Modelo";
  }
  setTextToRead(text: string): void {
    this.accser.getCurrentText();
  }

  speakText(): void {
    const text = this.textToRead; // Obtén el texto que deseas leer
  
    this.accser.speak(text); // Llama al método speak sin argumentos
  }
}
