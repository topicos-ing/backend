import { Component , Output, EventEmitter} from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-listcards',
  templateUrl: './listcards.component.html',
  styleUrls: ['./listcards.component.css']
})
export class ListcardsComponent {
  games: any = {}
  loading = true

  constructor(private _games: CardsService) { }

  ngOnInit() {
    this._games.getData().subscribe(res => {
      this.games = res;
      console.log('res', res)
      this.loading = false
    })
  }

  handleSearch(query:string){
this.games = this.games.filter((res:any) => res.name.toLowerCase().includes(query.toLowerCase())
);

  }

  @Output() mostrarModalEvent = new EventEmitter<void>();

  onMostrarModal() {
    // Emitir un evento para notificar al componente padre que debe mostrar el modal
    console.log('Evento emitido desde list-card');
    this.mostrarModalEvent.emit();
  }

}
