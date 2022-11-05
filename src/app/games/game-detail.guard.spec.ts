import { TestBed } from '@angular/core/testing';

import { GameDetailGuard } from './game-detail.guard';

describe('ProductDetailGuard', () => {
  let guard: GameDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GameDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
