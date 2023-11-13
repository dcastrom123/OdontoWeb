import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { AgendaComponent } from './componentes/pages/agenda/agenda.component';

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
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: "**",
    //component: ErrorPageComponent
    redirectTo: '404'
  }
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