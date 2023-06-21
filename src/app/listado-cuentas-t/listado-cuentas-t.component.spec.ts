import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCuentasTComponent } from './listado-cuentas-t.component';

describe('ListadoCuentasTComponent', () => {
  let component: ListadoCuentasTComponent;
  let fixture: ComponentFixture<ListadoCuentasTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCuentasTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoCuentasTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
