import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() cerrarModalEvent = new EventEmitter<void>();

  cerrarModal() {
    // Emitir un evento para notificar al componente padre que debe cerrar el modal
    this.cerrarModalEvent.emit();
  }
}
