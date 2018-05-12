import { TestBed, async, inject } from '@angular/core/testing';

import { ErrorsGuard } from './errors.guard';

describe('ErrorsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorsGuard]
    });
  });

  it('should ...', inject([ErrorsGuard], (guard: ErrorsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
