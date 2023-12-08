import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styles: []
})
export class AgendaComponent implements OnInit {

  showProfesional: boolean = true;
  showEspecialidad: boolean = false;
  isResult: boolean = false;

// Ejemplo de lista de profesionales y especialidades
profesionales: any[] = [];
especialidades: any[] = [];

// Variables para almacenar el profesional y especialidad seleccionado
selectedProfesional: any;
selectedEspecialidad: any;



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
       // Llamada a la API para obtener la lista de profesionales al iniciar el componente
       this.obtenerProfesionales();
       this.obtenerEspecialidades();
  }
//Profesionales
  obtenerProfesionales() {
    this.http.get<any[]>('http://localhost:3700/api/auth/profesionales').subscribe(
      (data) => {
        this.profesionales = data;
      },
      (error) => {
        console.error('Error al obtener la lista de profesionales:', error);
      }
    );
  }
  seleccionarProfesional(profesional: any) {
    this.selectedProfesional = profesional;
  }

  //Especialidades
  obtenerEspecialidades(){
    this.http.get<any[]>('http://localhost:3700/api/auth/especialidades').subscribe(
      (data) => {
        this.especialidades = data;
      },
      (error) => {
        console.error('Error al obtener la lista de especialidades:', error);
      }
    );
  }



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
