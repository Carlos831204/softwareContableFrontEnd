import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTercerosComponent } from './listado-terceros.component';

describe('ListadoTercerosComponent', () => {
  let component: ListadoTercerosComponent;
  let fixture: ComponentFixture<ListadoTercerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTercerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoTercerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
