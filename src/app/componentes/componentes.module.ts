import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



import { AgendaComponent } from './pages/agenda/agenda.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ComponentesRoutingModule } from './componentes-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';




@NgModule({
  declarations: [
    AgendaComponent,
    HomeComponent,
    ServiciosComponent,
    UsuariosComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ]
})
export class ComponentesModule { }
