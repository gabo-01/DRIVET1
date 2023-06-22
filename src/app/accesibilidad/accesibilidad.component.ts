import { Component } from '@angular/core';
import { AccesibilidadService } from '../servicios/accesibilidad.service';

@Component({
  selector: 'app-accesibilidad',
  templateUrl: './accesibilidad.component.html',
  styleUrls: ['./accesibilidad.component.css']
})
export class AccesibilidadComponent {
  constructor(public accesService: AccesibilidadService) { }
 
  aumento() {
    this.accesService.increaseFontSize();
  }

  disminucion() {
    this.accesService.decreaseFontSize();
  }
  funcionalidadSeleccionada: string = '';

 contraste(){
  this.accesService.toggleContraste();
 }
 speakText(): void {
  const currentText = this.accesService.getCurrentText();
  this.accesService.speak(currentText);
}

pauseSpeech(): void {
  this.accesService.pause();
}

resumeSpeech(): void {
  this.accesService.resume();
}


}
