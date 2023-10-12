import { Injectable } from '@angular/core';
import { Jugador } from './jugadores.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {
private Jugadores: Jugador[] = [
new Jugador(1,'Pepe Mejias','Delantero','./assets/1.jpg'),
new Jugador(2,'Martin Fernandez','Delantero','./assets/2.jpg')
];

getJugador(): Observable<Jugador[]> {
  return of(this.Jugadores);
}

getJugadorById(id: number): Observable<Jugador | undefined> {
  return of(this.Jugadores.find(p => p.id === id));
}

postJugador(id: number,
   nombre: string,
   posicion: string,
   imagen: string ): number {
    if (this.Jugadores.length=22){
    this.Jugadores.push(new Jugador(id,nombre,posicion,'./assets/' + imagen + '.jpg'));
    return 1;
  }else if (this.Jugadores.length<22){
    this.Jugadores.push(new Jugador(id,nombre,posicion,'./assets/' + imagen + '.jpg'));
  return 0;
}else
  return 2;


   }

  }
