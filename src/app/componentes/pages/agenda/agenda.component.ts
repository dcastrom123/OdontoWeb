import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';


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
selectedProfesionalId: string | undefined;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
       // Llamada a la API para obtener la lista de profesionales al iniciar el componente
      this.obtenerProfesionales();
      this.obtenerEspecialidades();
      this.obtenerEspprofesional();
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

  //Seleccionar profesional y guardarlo para usar en el siguiente paso
  seleccionarProfesional(profesional: any) {
    this.selectedProfesional = profesional;
    // Llamada a la API para obtener la lista de especialidades del profesional seleccionado
    this.obtenerEspprofesional();
  }
//seleccionar desde dropdowns
  seleccionarProfesionalDesdeDropdown(event: any) {
    let selectedProfesionalId = event.target.value;
    this.selectedProfesional = this.profesionales.find(profesional => profesional.id === this.selectedProfesionalId);
    
    console.log(selectedProfesionalId);
    this.cdr.detectChanges();

  }


  //Obtener especialidades por profesional seleccionado
  obtenerEspprofesional(){
    /*const _id = this.selectedProfesional._id;
    if (_id) {
      this.http.get<any[]>(`http://localhost:3700/api/auth/profesionales/${_id}/especialidades`).subscribe(
        (data) => {
          this.especialidades = data;
        },
        (error) => {
          console.error('Error al obtener la lista de especialidades:', error);
        }
      );
    }
    console.log("seleccionado dr muestra especialidad");
  */
    if (this.selectedProfesionalId) {
      this.http.get<any[]>(`http://localhost:3700/api/auth/profesionales/${this.selectedProfesionalId}/especialidades`).subscribe(
        (data) => {
          this.especialidades = data;
        },
        (error) => {
          console.error('Error al obtener la lista de especialidades:', error);
        }
      );
      console.log("seleccionado dr muestra especialidad");
    }
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
