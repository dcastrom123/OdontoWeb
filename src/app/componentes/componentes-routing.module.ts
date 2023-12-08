import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaComponent } from './pages/agenda/agenda.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { 
        path: 'agenda',
        component: AgendaComponent
      },
      { 
        path: 'agenda',
        component: AgendaComponent
      },
      { 
        path: 'home', 
        component: HomeComponent
      },
      { 
        path: 'servicios', 
        component: ServiciosComponent 
      },
      { 
        path: 'usuarios', 
        component: UsuariosComponent 
      },
      { 
        path: '**', 
        redirectTo: 'layout' 
      }
    ]
  }
] 

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentesRoutingModule { }
