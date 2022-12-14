import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup,
GoogleAuthProvider} from '@angular/fire/auth';
import { collectionData, Firestore, where } from '@angular/fire/firestore';
import { collection, doc, getDoc, query } from '@firebase/firestore';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  

  constructor(
    private auth : Auth,
    private firestore : Firestore
  ) {
    
   }

  register({correo, contrasena} : any){

    return  createUserWithEmailAndPassword(
      this.auth, correo, contrasena);

  }

  logearse({correo, contrasena} : any){
    return signInWithEmailAndPassword(this.auth, correo, contrasena);
    
  }

  async getRol({correo} : any){
    const personaRef = doc(this.firestore, 'persona', correo);
    const docSnap = await getDoc(personaRef);
    if (docSnap.exists()) {
      const rol = docSnap.get("esProf");
      // se ha conseguido sacar el rol del usuario, ahora se debe pasar a true o false 
      // dependiendo de su rol, posiblemente con un if dentro de este if
      if (rol == true) {
        console.log("El usuario es profesor");
        return true;
      } else {
        console.log("El usuario NO es profesor");
        return false;
      }
      
    } else {
      console.log("No such document!");
      
    }
  }


  logout(){
    return signOut(this.auth);
  }

  

}
