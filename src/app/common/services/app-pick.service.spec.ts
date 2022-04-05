import { TestBed } from '@angular/core/testing';

import { AppPickService } from './app-pick.service';

describe('MarkerService', () => {
  let service: AppPickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppPickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
