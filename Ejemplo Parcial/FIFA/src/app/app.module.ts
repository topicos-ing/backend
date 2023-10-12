import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaJugadoresComponent } from './lista-jugadores/lista-jugadores.component';
import { DetalleJugadoresComponent } from './detalle-jugadores/detalle-jugadores.component';
import { AltaJugadorComponent } from './alta-jugador/alta-jugador.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaJugadoresComponent,
    DetalleJugadoresComponent,
    AltaJugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
