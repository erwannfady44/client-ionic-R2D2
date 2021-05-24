import { TestBed } from '@angular/core/testing';

import { R2d2Service } from './r2d2.service';

describe('R2d2Service', () => {
  let service: R2d2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(R2d2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
