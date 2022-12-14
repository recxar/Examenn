import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, where, query } from '@angular/fire/firestore';
import { Persona } from '../interfaces/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private firestore : Firestore) { 
    
  }

  addPersona(persona : Persona){
    const personaRef = collection(this.firestore, 'persona');
    return addDoc(personaRef, persona);
  }

  getPersonas() : Observable<Persona[]>{
    const personaRef = collection(this.firestore, 'persona');
    return collectionData(personaRef,{idField : 'rut'}) as Observable<Persona[]>;
  }



}
