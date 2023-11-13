import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaComponent } from './pages/agenda/agenda.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ComponentesRoutingModule } from './componentes-routing.module';



@NgModule({
  declarations: [
    AgendaComponent,
    HomeComponent,
    ServiciosComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule
  ]
})
export class ComponentesModule { }
