import { Component, OnInit } from '@angular/core';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseApp } from '@angular/fire/app';
import {FirebaseTSApp} from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  private firestore: FirebaseTSFirestore;
  constructor() {
    FirebaseTSApp.init(environment.firebase)

    this.firestore = new FirebaseTSFirestore();
    this.firestore.update({

      path:["Clase","CfhfMTMpjhGcHrYYsK96"],
      data: {
        Estado: true,
        fecha:"28/11/2022",
        id_asig:"1",
        rut:"12343566"


      },
      onComplete:(docref) =>{
        alert("¡Asistencia Actualizada!")


      },
      onFail: (err) =>{

      }
    },

    


    )
  }
  ngOnInit() {
    
  }
}
