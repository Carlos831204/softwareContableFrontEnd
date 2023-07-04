import { TestBed } from '@angular/core/testing';

import { CuentaTService } from './cuenta-t.service';

describe('CuentaTService', () => {
  let service: CuentaTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentaTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
