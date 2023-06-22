import { Injectable } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AccesibilidadService {
  private scale: number = 1;
  public contrasteActivado: boolean = false;
  public contrasteSeleccionado: boolean = false;
  private speechSynthesizer: SpeechSynthesis;
  private currentText: string;
 
  constructor() {
    this.speechSynthesizer = window.speechSynthesis;
    this.currentText = '';
  }
  speak(text: string): void {
    this.currentText = text;
    const utterance = new SpeechSynthesisUtterance(this.currentText);
    this.speechSynthesizer.speak(utterance);
  }

  pause(): void {
    this.speechSynthesizer.pause();
  }

  resume(): void {
    this.speechSynthesizer.resume();
  }
  getCurrentText(): string {
    return this.currentText || '';
  }
  setText(text: string): void {
    this.currentText = text;
  }
  increaseFontSize() {
    this.scale += 0.1;
    this.applyScale();
  }
  
  decreaseFontSize() {
    if (this.scale > 0.1) {
      this.scale -= 0.1;
      this.applyScale();
    }
  }
  

  private applyScale() {
    const components = document.querySelectorAll('.accesibilidad-component');
    components.forEach((component: Element) => {
      const element = component as HTMLElement;
      element.style.transform = `scale(${this.scale})`;
    });
  }
  toggleContraste() {
    this.contrasteActivado = !this.contrasteActivado;
    this.contrasteSeleccionado = this.contrasteActivado;
    this.applyContraste();
  }

  private applyContraste() {
    const body = document.body;
    if (this.contrasteActivado) {
      body.classList.add('contraste-activado');
    } else {
      body.classList.remove('contraste-activado');
    }
  }

}
