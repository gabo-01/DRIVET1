import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{AngularFireAuth} from'@angular/fire/compat/auth';

import { Firestore } from '@angular/fire/firestore';


import { Observable, Subject } from 'rxjs';
import User from 'src/app/interfaces/user.interface';
import vendedor from 'src/app/interfaces/vendedor.interfaces';
import contacto from 'src/app/interfaces/contacto.interface';
import { map, tap } from 'rxjs/operators';


import firebase from 'firebase/compat/app'; 
import admin from 'src/app/interfaces/admin.interface';


import 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private apiUrl = 'http://dirivet-36979.web.app'; // Actualiza con la URL de tu API
  private databaseSubject: Subject<string> = new Subject<string>();


  constructor(private http: HttpClient,public auth: AngularFireAuth  ) { }
  
  getDatabaseResult(): Observable<string> {
    return this.databaseSubject.asObservable();
  }

  registrar(correo: string, password: string, usuario: User): Promise<firebase.auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(correo, password).then((userCredential) => {
      const user = userCredential.user;
      const nombre = usuario.nombre; // Reemplaza con el nombre que deseas guardar
  
      if (user) {
        // Guardar el nombre en el perfil del usuario
        return user.updateProfile({
          displayName: nombre
        })
          .then(() => {
            // El nombre se ha guardado exitosamente
            console.log("Nombre guardado:", nombre);
            return userCredential; // Retornar el UserCredential original
          })
          .catch((error) => {
            // Ocurrió un error al guardar el nombre
            console.error("Error al guardar el nombre:", error);
            throw error; // Lanzar el error para que sea manejado en la parte que llame a esta función
          });
      } else {
        throw new Error("El objeto 'user' es nulo.");
      }
    })
    .catch((error) => {
      // Ocurrió un error al crear la cuenta de usuario
      console.error("Error al crear la cuenta:", error);
      throw error; // Lanzar el error para que sea manejado en la parte que llame a esta función
    });
  }

  
  enviarDatosContacto(contacto: contacto): Promise<any> {
    const url = `${this.apiUrl}/contacto`;
    return this.http.post(url, contacto).toPromise();
  }

  enviarDatosreserva(reserva: any): Promise<any> {
    const url = `${this.apiUrl}/contactoreserva`;
    return this.http.post(url, reserva).toPromise();
  }
  
  
  login(correo: string, password: string):  Promise<firebase.auth.UserCredential>  {
    return this.auth.signInWithEmailAndPassword(correo, password);
  }

  loginadmin(correo: string, password: string):  Promise<firebase.auth.UserCredential>  {
    return this.auth.signInWithEmailAndPassword(correo, password);
  }
  
  
  registerUser(user: User,): Observable<any> {
   const url = `${this.apiUrl}/registeruser`; // Actualiza la ruta según tu API
    console.log('User data:', user);
    return this.http.post(url, user).pipe(
      tap(response => console.log('Backend response:', response))
    );;
  }
  registervendedor(vendedor: vendedor,): Observable<any> {
    const url = `${this.apiUrl}/registervendedor`; // Actualiza la ruta según tu API
     console.log('User data:', vendedor);
     return this.http.post(url, vendedor).pipe(
       tap(response => console.log('Backend response:', response))
     );;
   }

   registerAdmin(admin: admin,): Observable<any> {
    const url = `${this.apiUrl}/registerAdmin`; // Actualiza la ruta según tu API
     console.log('User data:', admin);
     return this.http.post(url, admin).pipe(
       tap(response => console.log('Backend response:', response))
     );;
   }


   getUsers(): Observable<any> {
    const url = `${this.apiUrl}/users`; // Actualiza la ruta según tu API
    return this.http.get(url).pipe(
      tap(response => console.log('Backend response:', response))
    );
  }

  getreservas(): Observable<any> {
    const url = `${this.apiUrl}/reserva`; // Actualiza la ruta según tu API
    return this.http.get(url).pipe(
      tap(response => console.log('Backend response:', response))
    );
  }

  getcarr(): Observable<any> {
    const url = `${this.apiUrl}/carros`; // Actualiza la ruta según tu API
    return this.http.get(url).pipe(
      tap(response => console.log('Backend response:', response))
    );
  }
   login1(): Observable<any> {
    const url = `${this.apiUrl}/compareDatabases`;
    const usuario = {
      usuario: 'usuario',
      password: 'password'
    };
  
    return this.http.post(url,usuario).pipe(
      map((response: any) => {
        console.log('Backend response:', response);
        const opcion = response.results?.length > 0 ? response.results[0].database : '';
        this.databaseSubject.next(opcion);
        console.log(opcion)
        return response; // Opcionalmente, puedes devolver la respuesta original si es necesario en otro lugar del código
      
      })
      
    );
  }

  contacto = () => {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          reject(new Error('No hay usuario autenticado.'));
        }
      });
    });
  };

 logout(): Promise<void> {
  return this.auth.signOut();
}

}