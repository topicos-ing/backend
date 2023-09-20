import { Component, Input } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() imagen: string = "";
  @Input() descripcion: string = "";

}
