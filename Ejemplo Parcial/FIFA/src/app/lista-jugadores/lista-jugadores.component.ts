import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from '../jugadores.model';
import { JugadoresService } from '../jugadores.service';


@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent implements OnInit {
  jugadores: Jugador[] = [];

  constructor(private router: Router, private jugadoresservices: JugadoresService) {}

  ngOnInit() {
    this.jugadoresservices.getJugador().subscribe(jugadores => {
      this.jugadores = jugadores;
    });
  }

  mostrarDetalle(id: number) {
    this.router.navigate(['/detalle-jugador', id]);
  }


}
