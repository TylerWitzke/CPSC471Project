import { TestBed } from '@angular/core/testing';

import { PlayerAuthenticationService } from './player-authentication.service';

describe('PlayerAuthenticationService', () => {
  let service: PlayerAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
