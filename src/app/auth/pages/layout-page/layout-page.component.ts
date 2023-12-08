import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../interfaces/auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent{

  constructor(private authService:AuthService,
    private router: Router
    ) {

     }



  get usuario(): Usuario | undefined{
    return this.authService.usuario;
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

}
