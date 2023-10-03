import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio1';
  modalVisible = false;

  // Manejador del evento desde el componente app-card para mostrar el modal
  onMostrarModal() {
    // Cuando se emite el evento desde el componente app-card, muestra el modal
    console.log('Evento recibido en app.component.ts');
    this.modalVisible = !this.modalVisible;
    console.log('modal is visible', this.modalVisible);
  }

  // Manejador del evento desde el componente app-modal para cerrar el modal
  onCerrarModal() {
    // Cuando se emite el evento desde el componente app-modal, cierra el modal
    this.modalVisible = false;
  }
}
