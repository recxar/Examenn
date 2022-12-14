import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonasService } from '../services/personas.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formulario : FormGroup;


  constructor(
    private personasService : PersonasService,
    private router : Router,
    private loginService : LoginService
    
    ) {
      this.formulario = new FormGroup({
        rut : new FormControl(),
        nombre : new FormControl(),
        apellido : new FormControl(),
        correo : new FormControl(),
        contrasena : new FormControl(),
        esProf : new FormControl("false")
      })
     }

  ngOnInit() {
  }
  

  async onSubmit(){
    this.loginService.register(this.formulario.value)
      .then( response => {
        console.log(response);
        this.personasService.addPersona(this.formulario.value);
        this.router.navigate(['/home'])
      })
    .catch(error => console.log(error));
  }

  

}
