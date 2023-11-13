import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styles: [
  ]
})
export class AgendaComponent implements OnInit {

  
  showProfesional: boolean = true;
  showEspecialidad: boolean = false;

  isResult: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  btnsig(event: Event, accion:any){
    this.isResult = true;
  }

  getAccion(event: Event, tipoAccion:any){

    //event.preventDefault();

    switch(tipoAccion){
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
