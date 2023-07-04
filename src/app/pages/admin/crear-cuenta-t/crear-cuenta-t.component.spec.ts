import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuentaTComponent } from './crear-cuenta-t.component';

describe('CrearCuentaTComponent', () => {
  let component: CrearCuentaTComponent;
  let fixture: ComponentFixture<CrearCuentaTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCuentaTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCuentaTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
