import { Component } from '@angular/core';
import { AuthService } from '../servicios/firebase/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import User from '../interfaces/user.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  formulario: FormGroup;
  fname = false;
  fusuario = false;
  fpassword = false;
  fphone = false;

  constructor(private auth: AuthService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required), 
      usuario: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    });
  }

  focusname() {
    this.fname = true;
  }

  focusemail() {
    this.fusuario = true;
  }

  focuspass() {
    this.fpassword = true;
  }

  focusphone() {
    this.fphone = true;
  }

  todo() {
    this.fname = true;
    this.fusuario = true;
    this.fpassword = true;
    this.fphone = true;
  }

  onSubmit() {
    console.log(this.formulario.value)
    console.log(this.formulario.valid);
    if (this.formulario.valid) {
      const user: User = this.formulario.value;
      console.log(this.formulario.value)
      this.auth.registerUser(user).subscribe(
        response => {
          console.log(response);  
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Us añadido correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            this.router.navigate(['/home']); 
          }, 1500);
        },
        error => {
          console.error(error); // Maneja el error en caso de que ocurra
          // Realiza las acciones necesarias en caso de error
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
    'width':'35vw',
    'margin-top':'10%',
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