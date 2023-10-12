import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleJugadoresComponent } from './detalle-jugadores.component';

describe('DetalleJugadoresComponent', () => {
  let component: DetalleJugadoresComponent;
  let fixture: ComponentFixture<DetalleJugadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleJugadoresComponent]
    });
    fixture = TestBed.createComponent(DetalleJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
