import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { collection, getDoc, getDocs, query, where } from '@firebase/firestore';
import { LoginService } from '../services/login.service';
import { PersonasService } from '../services/personas.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formLogin : FormGroup;
  constructor(
    private firestore : Firestore,
    private loginService : LoginService,
    private router : Router
  ) {
    this.formLogin = new FormGroup({
      correo : new FormControl(),
      contrasena : new FormControl()
    })
  }

  async onSubmit(){
    
    const personaRef = collection(this.firestore, 'persona'); 
    const rol = await this.loginService.getRol(this.formLogin.value);
    this.loginService.logearse(this.formLogin.value)
      .then(response => {
         if ( rol == true) {
          console.log(response);
          this.router.navigate(['/page-prof'])
          
         } else {
          console.log(response);
          this.router.navigate(['/dashboard'])
         }
          
      })
    .catch(error => console.log(error));
  }
}
