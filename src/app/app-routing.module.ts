import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { AgendaComponent } from './componentes/pages/agenda/agenda.component';
import { ServiciosComponent } from './componentes/pages/servicios/servicios.component';
import { HomeComponent } from './componentes/pages/home/home.component';

const routes: Routes = [
  {
    path: 'auth',
      loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'componentes',
      loadChildren: () => import('./componentes/componentes.module').then( m => m.ComponentesModule ),
      canActivate: [ ValidarTokenGuard ],
      canLoad: [ ValidarTokenGuard ]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'Inicio',
    component: ErrorPageComponent
  },
  {
    path: "**",
    //component: ErrorPageComponent
    redirectTo: 'Inicio'
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }