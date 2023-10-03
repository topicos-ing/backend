import { Component, Output, EventEmitter } from '@angular/core';

import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})
export class SerchComponent {
@Output() search = new EventEmitter<string>();
query: string = '';

buscarGame(){

  this.search.emit(this.query);
}
}


