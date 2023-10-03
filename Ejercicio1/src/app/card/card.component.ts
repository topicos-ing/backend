import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() imagen: string = "";

  @Input() descripcion: string = "";
  @Output() mostrarModalEvent = new EventEmitter<void>();

  mostrarModal() {
    // Emitir un evento para notificar al componente padre que debe mostrar el modal
    console.log('Evento emitido desde app-card');
    this.mostrarModalEvent.emit();
  }

}

