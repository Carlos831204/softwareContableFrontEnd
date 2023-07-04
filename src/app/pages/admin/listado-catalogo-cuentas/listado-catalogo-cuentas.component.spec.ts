import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCatalogoCuentasComponent } from './listado-catalogo-cuentas.component';

describe('ListadoCatalogoCuentasComponent', () => {
  let component: ListadoCatalogoCuentasComponent;
  let fixture: ComponentFixture<ListadoCatalogoCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCatalogoCuentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoCatalogoCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
