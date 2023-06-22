import { Component } from '@angular/core';
import { AuthService } from '../servicios/firebase/auth.service';
import { reserva } from '../interfaces/reserva.interface';

@Component({
  selector: 'app-navbarlat',
  templateUrl: './navbarlat.component.html',
  styleUrls: ['./navbarlat.component.css']
})
export class NavbarlatComponent {
  users: any[] = [];
  userData:any;
  showComponentData: boolean = false;
  showComponentData2: boolean = false;
  showComponentData3: boolean = false;
  showComponentData4: boolean = false;
  reserva: any[] = [];
  car:any[]=[];
  constructor(private userService: AuthService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getreserva();
    this.getcarr();
    this.userService.contacto().then(
      (response: any) => {
        console.log('Datos del usuario:', response);
        this.userData = response; // Asigna directamente los datos del usuario a la variable userData
       
      },
      (error: any) => {
        console.error('Error al obtener los datos del usuario:', error);
      }
    );
  }

  showSecondComponentData() {
    this.showComponentData = true;
    this.showComponentData2 = false;
    this.showComponentData3 = false;
    this.showComponentData4 = false;
  }
  showSecondComponentData2() {
    this.showComponentData2 = true;
    this.showComponentData = false;
    this.showComponentData3 = false;
    this.showComponentData4 = false;

  }
  showSecondComponentData3() {
    this.showComponentData3 = true;
    this.showComponentData2 = false;
    this.showComponentData4 = false;
    this.showComponentData = false;
  }
  showSecondComponentData4() {
    this.showComponentData4 = true;
    this.showComponentData3 = false;
    this.showComponentData2 = false;
    this.showComponentData = false;
  }

  getreserva(){
    this.userService.getreservas().subscribe(
      (response: any[])=>{
        this.reserva=response;
      },(error:any) => {
        console.error('Error al obtener los usuarios:', error);
      }
      )
    
  }
  getUsers() {
    this.userService.getUsers().subscribe(
      (response: any[]) => {
        this.users = response;
      },
      (error: any) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }

  getcarr() {
    this.userService.getcarr().subscribe(
      (response: any[]) => {
        this.car = response;
      },
      (error: any) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
}
