import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Usuario } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent{

  get usuario(): Usuario | undefined {
    return this.authService.usuario;
  }

  constructor( private router: Router,
               private authService: AuthService) { }

 
  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
