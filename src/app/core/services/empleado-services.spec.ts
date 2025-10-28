import { TestBed } from '@angular/core/testing';

import { EmpleadoServices } from './empleado-services';

describe('EmpleadoServices', () => {
  let service: EmpleadoServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
