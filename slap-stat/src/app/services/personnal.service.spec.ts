import { TestBed } from '@angular/core/testing';

import { PersonnalService } from './personnal.service';

describe('PersonnalService', () => {
  let service: PersonnalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonnalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
