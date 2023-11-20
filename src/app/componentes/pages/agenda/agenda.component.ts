import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styles: []
})
export class AgendaComponent implements OnInit {

  showProfesional: boolean = true;
  showEspecialidad: boolean = false;
  isResult: boolean = false;

// Ejemplo de lista de profesionales
profesionales: any[] = [
  { id: 1, nombre: 'Dr. Carlos Fantuzi' },
  { id: 2, nombre: 'Dra. Ana Rodríguez' },
  // Agrega más profesionales según tus necesidades
];
 // Variable para almacenar el profesional seleccionado
 selectedProfesional: any;

  constructor() { }

  ngOnInit(): void {}

  btnsig(event: Event, accion: any) {
    this.isResult = true;
  }
  goBack(){
    //volver pagina anterior
    window.history.back();
  }

  getAccion(event: Event, tipoAccion: any) {
    switch (tipoAccion) {
      case 'ingresadr':
        this.showProfesional = true;
        this.showEspecialidad = false;
        break;
      case 'ingresaes':
        this.showEspecialidad = true;
        this.showProfesional = false;
        break;
    }
  }
}
