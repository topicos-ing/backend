import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJugadoresComponent } from './lista-jugadores.component';

describe('ListaJugadoresComponent', () => {
  let component: ListaJugadoresComponent;
  let fixture: ComponentFixture<ListaJugadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaJugadoresComponent]
    });
    fixture = TestBed.createComponent(ListaJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
