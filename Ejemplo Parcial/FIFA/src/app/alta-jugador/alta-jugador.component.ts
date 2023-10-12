import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from '../jugadores.model';
import { JugadoresService } from '../jugadores.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-alta-jugador',
  templateUrl: './alta-jugador.component.html',
  styleUrls: ['./alta-jugador.component.css']
})
export class AltaJugadorComponent {

  Nombre: string ='';
  valorPosicion: string = '';
  imagenfoto: string= '';
  resultado: number= -1;
  mostrarMensaje= false;
  constructor(
    private route: ActivatedRoute,
    private jugadorService: JugadoresService,private location: Location
  ) {}


  Agregar(){

      this.resultado = this.jugadorService.postJugador(3,this.Nombre, this.valorPosicion,this.imagenfoto);
if (this.resultado=2) {
  this.mostrarMensaje=true;
}
      this.goBack();

  }

  goBack() {
    this.location.back();
  }
}
