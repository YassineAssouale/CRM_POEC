import { TestBed } from '@angular/core/testing';

import { AccessControlsGuard } from './access-controls.guard';

describe('AccessControlsGuard', () => {
  let guard: AccessControlsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessControlsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
