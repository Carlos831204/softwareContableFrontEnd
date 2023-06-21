import { TestBed } from '@angular/core/testing';

import { CatalogoCuentaService } from './catalogo-cuenta.service';

describe('CatalogoCuentaService', () => {
  let service: CatalogoCuentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoCuentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
