import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAsientosContableComponent } from './listado-asientos-contable.component';

describe('ListadoAsientosContableComponent', () => {
  let component: ListadoAsientosContableComponent;
  let fixture: ComponentFixture<ListadoAsientosContableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAsientosContableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoAsientosContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
