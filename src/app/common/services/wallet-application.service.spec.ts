import { TestBed } from '@angular/core/testing';

import { walletApplicationService } from './wallet-application.service';

describe('MarkerService', () => {
  let service: walletApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(walletApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
