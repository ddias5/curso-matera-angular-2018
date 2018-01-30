import { TestBed, inject } from '@angular/core/testing';

import { InstrutorService } from './instrutor.service';

describe('InstrutorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstrutorService]
    });
  });

  it('should be created', inject([InstrutorService], (service: InstrutorService) => {
    expect(service).toBeTruthy();
  }));
});
