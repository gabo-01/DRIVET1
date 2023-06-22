import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DriveT';
  mostrarChat: boolean = false;

  toggleChat() {
    this.mostrarChat = !this.mostrarChat;
  }
}
