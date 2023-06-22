import { Component, OnInit } from '@angular/core';
import { carro } from '../interfaces/carro.interfaces';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../servicios/firebase/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Modelo: string = "";
  
  constructor(private route: Router, private authe: AuthService) {}

  ngOnInit(): void {
    const navbarToggle = document.querySelector('.navbar-toggle') as HTMLElement;
    const navList = document.querySelector('.nav-list') as HTMLElement;
    
    // Agrega un evento de clic al elemento navbarToggle para alternar la clase "show" en navList
    navbarToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
     
  }

  logout(): void {
    this.authe.logout()
      .then(() => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Adios',
          showConfirmButton: false,
          timer: 1500
        });
        this.route.navigate(['/home']);
      })
      .catch(error => {
        // Manejo de errores en caso de que ocurra un problema durante el cierre de sesión
        console.error('Error al cerrar sesión', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ' Error al cerrar sesion'
        });
      });
  }
}


