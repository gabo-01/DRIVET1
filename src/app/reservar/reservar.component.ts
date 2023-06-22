import { Component, OnInit } from '@angular/core';
import { AutosService } from '../servicios/autos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { carro } from '../interfaces/carro.interfaces';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservaService } from '../servicios/reserva.service';
import { reserva } from '../interfaces/reserva.interface';
import { AuthService } from '../servicios/firebase/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class RESERVARComponent implements OnInit {
  public car: carro | null = null;
  public Formrenta: FormGroup;
  userData: any;
  titulo='Reserva confirmacion'

  mostrarElemento:boolean=false;
  constructor(
    private fire: AngularFirestore,
    private carros: AutosService,
    private formb: FormBuilder,
    private router: Router,
    private reserva: ReservaService,
    private aroute:ActivatedRoute,
    private service: AuthService
  ) {
    this.Formrenta = this.formb.group({
      id:'',
      Marca: [''],
      Modelo: [''],
      img1: [''],
      precio: [''],
      Nombre: ['',[Validators.required,Validators.minLength(3)]],
      Apellido: ['',[Validators.required,Validators.minLength(3)]],
      Dire: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      FI: ['',Validators.required],
      FE: ['',Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      
    });
  
   
  }

  ngOnInit(): void {
    this.service.contacto().then(
      (response: any) => {
        console.log('Datos del usuario:', response);
        this.userData = response; // Asigna directamente los datos del usuario a la variable userData
        this.Formrenta.patchValue({
          Nombre: this.userData?.displayName,
          correo:this.userData?.email
        });
      },
      (error: any) => {
        console.error('Error al obtener los datos del usuario:', error);
      }
    )
    this.car = this.carros.getcarro();
    if (this.car) {
      this.Formrenta.patchValue({
        Marca: this.car.Marca,
        Modelo: this.car.Modelo,
        img1: this.car.img1,
        precio: this.car.precio
      });
    }
    console.log(this.car);
    
  }

  Registrar() {
    const coleccionRef = this.fire.collection('reserva');
   // const userRef = admin.firestore().collection('usuarios').doc(userId);  
 this.service.enviarDatosreserva(this.Formrenta.value).then(
  response => {
    console.log(response);  
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Reserva exitosa',
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
      text: 'Error al enviar reserva'
    })
  }
);   
   coleccionRef.add(this.Formrenta.value)
      .then((docRef) => {
        const nuevoDocumentoId = docRef.id;
        this.Formrenta.patchValue({ id: nuevoDocumentoId }); // Asignamos el ID automático al campo "reserva" del formulario
        this.reserva.reservar(this.Formrenta.value);
        console.log(this.Formrenta.value);
        this.mostrarElemento=true;
        this.router.navigate(['/home']);

      });
  }


  
}
