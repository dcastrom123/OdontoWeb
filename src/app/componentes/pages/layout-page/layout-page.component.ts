import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Usuario } from '../../../auth/interfaces/auth.interface';


@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent implements OnInit {

  constructor(private authService:AuthService,
    private router: Router
    ) {

     }

  ngOnInit(): void {
  }
  get usuario(): Usuario | undefined{
    return this.authService.usuario;
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

}
