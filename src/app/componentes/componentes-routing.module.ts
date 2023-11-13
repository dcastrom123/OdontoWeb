import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaComponent } from './pages/agenda/agenda.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'agenda', component: AgendaComponent },
      { path: 'home', component: HomeComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: '**', redirectTo: 'home' }

    ]
  }
] 

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentesRoutingModule { }
