import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from '../jugadores.model';
import { JugadoresService } from '../jugadores.service';

@Component({
  selector: 'app-detalle-jugadores',
  templateUrl: './detalle-jugadores.component.html',
  styleUrls: ['./detalle-jugadores.component.css']
})
export class DetalleJugadoresComponent implements OnInit {

  jugador: Jugador | undefined;

  constructor(
    private route: ActivatedRoute,
    private jugadorService: JugadoresService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.jugadorService.getJugadorById(id).subscribe(Jugador => {
        this.jugador =Jugador;
      });
    });
  }
}
