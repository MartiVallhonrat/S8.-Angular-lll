import { TestBed } from '@angular/core/testing';

import { StarshipsServiceService } from './starships-service.service';

describe('StarshipsServiceService', () => {
  let service: StarshipsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarshipsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
