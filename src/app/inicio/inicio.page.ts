import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private loginService : LoginService,
    private router : Router
  ) { }

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
