import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowsService {
  getwindowRef() {
    return window
  }
}
