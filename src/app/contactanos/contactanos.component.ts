import { Component } from '@angular/core';
import { AuthService } from '../servicios/firebase/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import contacto from '../interfaces/contacto.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {
  formulario: FormGroup;
  userData: any;
  fusuario = false;
  fnombre = false;
  fmensaje = false;
  router: any;
  constructor(private service: AuthService) {
    this.formulario = new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.email]),
      nombre: new FormControl('', [Validators.required]),
      mensaje: new FormControl('', [Validators.required])
    })
  }
  ngOnInit() {
    this.service.contacto().then(
      (response: any) => {
        console.log('Datos del usuario:', response);
        this.userData = response; // Asigna directamente los datos del usuario a la variable userData
       
      },
      (error: any) => {
        console.error('Error al obtener los datos del usuario:', error);
      }
    );
  }
  focusemail() {
    this.fusuario = true;
  }
  
  focuspass() {
    this.fnombre = true;
  }
  focusmrnsaje() {
    this.fmensaje = true;
  }
  todo() {
   
    this.fusuario = true;
    this.fnombre = true;
    
  }
onSubmit(){
  console.log(this.formulario.value);
  const contacto:contacto=this.formulario.value
  if(this.formulario.valid){
    this.service.enviarDatosContacto(contacto).then(
      response => {
        console.log(response);  
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Correo enviado exitosamente',
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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al enviar el correo'
        })
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

