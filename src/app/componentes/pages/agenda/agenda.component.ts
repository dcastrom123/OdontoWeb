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

  //seleccionar desde dropdowns
    seleccionarProfesionalDesdeDropdown(event: any) {
      this.selectedProfesionalId = event.target.value;

      if (this.selectedProfesionalId) {
          this.seleccionarProfesional(); 
          console.log(this.selectedProfesionalId);
          this.cdr.detectChanges();
      } else {
          console.error('ID de profesional seleccionado es undefined.');
      }
    }
//---------------------------------------------------------------------------
  //Seleccionar profesional y guardarlo para usar en el siguiente paso
  //seleccionarProfesional(profesional: any) {
    //this.selectedProfesional = profesional;
    //this.obtenerEspprofesional();
  //}
//---------------------------------------------------------------------------

// Obtener información del profesional seleccionado
seleccionarProfesional() {
  this.http.get(`http://localhost:3700/api/auth/profesionales/${this.selectedProfesionalId}`)
      .subscribe((data: any) => {
          this.selectedProfesional = data;
        console.log(this.selectedProfesional);
          // Luego, obtén las especialidades del profesional seleccionado
          this.obtenerEspprofesional();
      });
      console.log(this.selectedProfesional);
    }


  //Obtener especialidades por profesional seleccionado
  obtenerEspprofesional(){
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
/*
  btnsig(event: Event, isResult: boolean) {
        // Asegúrate de que selectedProfesional tenga información válida
        if (this.selectedProfesional) {
          const id = this.selectedProfesional._id; // O ajusta según la propiedad correcta
          const nombre = this.selectedProfesional.nombre;
          const especialidades = this.especialidades; // Asegúrate de que especialidades tenga información válida
  
          // Ahora puedes usar el ID, nombre y especialidades en la siguiente sección
          // ... (código para navegar a la siguiente sección o realizar acciones necesarias)
      } else {
          console.error('No se ha seleccionado un profesional.');
      }
  }*/
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
