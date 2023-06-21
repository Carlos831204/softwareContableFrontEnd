import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAsientoContableComponent } from './crear-asiento-contable.component';

describe('CrearAsientoContableComponent', () => {
  let component: CrearAsientoContableComponent;
  let fixture: ComponentFixture<CrearAsientoContableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAsientoContableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAsientoContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
