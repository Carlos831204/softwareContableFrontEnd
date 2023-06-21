import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAsientoContableComponent } from './actualizar-asiento-contable.component';

describe('ActualizarAsientoContableComponent', () => {
  let component: ActualizarAsientoContableComponent;
  let fixture: ComponentFixture<ActualizarAsientoContableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarAsientoContableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarAsientoContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
