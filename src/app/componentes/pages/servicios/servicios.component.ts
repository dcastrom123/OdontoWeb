import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styles: []
})
export class ServiciosComponent implements OnInit {

  selectedService: string = '';
  isResult: boolean = false;

  constructor() { }

  ngOnInit(): void {}
 /*
  btnsig(event: Event) {
    this.isResult = true;
  }
  */
 btnsig(event: Event): void {
    // Puedes dejar el cuerpo vacío o agregar lógica según sea necesario
    // Por ejemplo, puedes agregar lógica para manejar el evento de clic
    // Aquí solo se imprime un mensaje en la consola
    console.log('Botón siguiente clickeado');
}

}
