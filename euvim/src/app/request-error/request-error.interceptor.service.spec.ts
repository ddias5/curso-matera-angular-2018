import { TestBed, inject } from '@angular/core/testing';

import { RequestError.InterceptorService } from './request-error.interceptor.service';

describe('RequestError.InterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestError.InterceptorService]
    });
  });

  it('should be created', inject([RequestError.InterceptorService], (service: RequestError.InterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
