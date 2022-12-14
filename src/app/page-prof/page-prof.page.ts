import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { IonButton } from '@ionic/angular';


@Component({
  selector: 'app-page-prof',
  templateUrl: './page-prof.page.html',
  styleUrls: ['./page-prof.page.scss'],
})
export class PageProfPage implements OnInit {

  datosCodigoQR:FormGroup 
  codigoQR?:any;
  constructor(
    private loginService : LoginService,
    private router : Router, 
  ) {this.datosCodigoQR = new FormGroup({
    fechaQR : new FormControl(),
    asignaturaQR : new FormControl()
  }) }


  //italo pasa estos valores a tu página del proyecto,

 fecha:Date
 asignatura:string
 estado:boolean = false

 //hasta acá -> la idea es que cuando el alumno llegue a tu página, el estado pase de false a true.

generarQR(){
  console.log(this.fecha);
  
  this.codigoQR = this.fecha +" "+ this.asignatura  
}

  ngOnInit() {
    
  }

  onClick(){
    this.loginService.logout()
      .then( () =>{
        this.router.navigate(['/home']);
    })
    .catch(error => console.log(error))
  }

}
