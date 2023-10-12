import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaJugadoresComponent } from './lista-jugadores/lista-jugadores.component';
import { DetalleJugadoresComponent } from './detalle-jugadores/detalle-jugadores.component';
import { AltaJugadorComponent } from './alta-jugador/alta-jugador.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista-jugador', pathMatch: 'full' },
  { path: 'lista-jugador', component: ListaJugadoresComponent },
  { path: 'detalle-jugador/:id', component: DetalleJugadoresComponent },
  { path: 'alta-jugador', component: AltaJugadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
