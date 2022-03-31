import { TestBed } from '@angular/core/testing';

import { CoachAuthenticationService } from './coach-authentication.service';

describe('CoachAuthenticationService', () => {
  let service: CoachAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoachAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
