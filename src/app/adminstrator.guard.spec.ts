import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminstratorGuard } from './adminstrator.guard';

describe('adminstratorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminstratorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
