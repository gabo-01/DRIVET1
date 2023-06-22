import { Component } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent {
  isChatOpen = false;

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }
}
