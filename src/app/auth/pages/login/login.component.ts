import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {

  constructor(private router: Router){}

  login(){
    // <login> irá al backend.
    // El backend debe de confirmar que existe un usuario.
    // Ese usuario debe de almacenarse en un servicio, para que esté disponible para toda la aplicación.
    // Una vez teniendo esa información, navegar a la pantalla de listado de Héroes, para ello ocuparemos inyectar a Router.
    
    this.router.navigate(['./heroes'])

  }
}
