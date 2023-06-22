import { Component } from '@angular/core';
import { AuthService } from '../servicios/firebase/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lgadmin',
  templateUrl: './lgadmin.component.html',
  styleUrls: ['./lgadmin.component.css']
})
export class LgadminComponent {
  formulario: FormGroup;
  fusuario = false;
  fpassword = false;
  constructor(private auth: AuthService, private router: Router) {
    this.formulario = new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      
    })
  }

  focusemail() {
    this.fusuario = true;
  }
  
  focuspass() {
    this.fpassword = true;
  }
  todo() {
   
    this.fusuario = true;
    this.fpassword = true;
    
  }

  onSubmit() {
  if (this.formulario.valid) {
    const credentials = this.formulario.value;
    this.auth.loginadmin(credentials.usuario, credentials.password).then(
      response => {
        console.log(response);
        if (response) {
          setTimeout(() => {
            
         
            this.router.navigate(['/admin']);
          }, 1500);
        } else {
          // Realiza las acciones en caso de respuesta no válida
        }
      },
      error => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al ingresar, no estás registrado o tus credenciales son incorrectas'
        });
      }
    );
}
  }

  card={
   
    'display':'flex',
    'justify-content':'center',
    'align-items':'center',
    'border':'1px solid black',
   'border-radius': '15px',
    'Height':'100vh',
    'margin-left':'35%',
    'width':'30vw',
    'margin-top':'15%',
    'box-shadow': '14px 12px 16px rgba(0, 0, 0, 0.9)',
    'position': 'absolute',
    'z-index': '1',
    'background-color':'white'
    
  }
  
  form={
    'display':'flex',
    'flex-direction': 'column',
    'gap':'20px',
    'padding':'10px'
  }
  labels={
    'display':'flex',
    'justify-content':'center',
    'align-items':'center',
  }
  btn={
  'background-color': '#007bff',
  'color': '#fff',
  'border': 'none',
  'padding': '8px 16px',
  'border-radius': '10px',
  'cursor': 'pointer'
  }
}