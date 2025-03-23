import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routeDebugGuard } from './route-debug.guard';

describe('routeDebugGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routeDebugGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
