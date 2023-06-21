import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCuentaTComponent } from './actualizar-cuenta-t.component';

describe('ActualizarCuentaTComponent', () => {
  let component: ActualizarCuentaTComponent;
  let fixture: ComponentFixture<ActualizarCuentaTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCuentaTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarCuentaTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
