import { Component } from '@angular/core';
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

}
