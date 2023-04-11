import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {

  constructor(private router: Router,
              private authService : AuthService){}

  login(){
    // <login()> irá al backend con ayuda del servicio auth.service.ts., así que hay que inyectarlo.
    this.authService.login().subscribe(resp => {
      console.log('usuario:', resp)

      if(resp.id){
        // Una vez teniendo la confirmación del backend de que el usuario existe, navegar a la pantalla de listado de Héroes, para ello ocuparemos inyectar a Router.
        this.router.navigate(['./heroes']);
      }
    });

    // El backend debe de confirmar que existe un usuario.
    // Ese usuario debe de almacenarse en un servicio, para que esté disponible para toda la aplicación.
    
  }

  loginSinId(){
    this.authService.logout();
    this.router.navigate(['./heroes']);
  }
}
