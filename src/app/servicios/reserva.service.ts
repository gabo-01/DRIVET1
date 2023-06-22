import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Database,set, } from '@angular/fire/database';
import { reserva } from '../interfaces/reserva.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  reserva:reserva[]=[];
  public documentoId: string = '';
  constructor(private anguf:AngularFirestore) { }

  reservar(reserva: reserva) {
    const coleccionRef = this.anguf.collection('reserva');
    coleccionRef.get().toPromise().then(snapshot => {
      if (snapshot) {
        const documentos = snapshot.docs;
        if (documentos.length > 0) {
          const primerDocumento = documentos[0];
          const primerDocumentoId = primerDocumento.id;
          coleccionRef.doc(primerDocumentoId).update(reserva)
            .then(() => {
              console.log('Documento actualizado correctamente.');
            })
            .catch((error) => {
              console.error('Error al actualizar el documento:', error);
            });
        } else {
          coleccionRef.add(reserva)
            .then((docRef) => {
              console.log('Documento creado correctamente.');
              const nuevoDocumentoId = docRef.id;
              this.getid(nuevoDocumentoId);
            })
            .catch((error) => {
              console.error('Error al crear el documento:', error);
            });
        }
      }
    });
  }
  
  

 getid(id: string): string {
  this.documentoId = id;
  return id;
}
getreservas(){
 return this.anguf.collection('reserva').valueChanges();
}
  actualizarr(id:string)  {
    return this.anguf.collection('reserva').doc(id).snapshotChanges();
  }
  borrar(id:string) :Promise<void>{
    return this.anguf.collection('reserva').doc(id).delete();
  }
}
