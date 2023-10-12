import { Component } from '@angular/core';
import { AltaJugadorComponent } from './alta-jugador/alta-jugador.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FIFA';
  mostrar = true;

  constructor(private router: Router){}

  agregarJugador(){
    this.mostrar = false
  this.router.navigate(['/alta-jugador']);
  }
}

