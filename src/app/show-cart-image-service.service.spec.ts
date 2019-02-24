import { TestBed, inject } from '@angular/core/testing';

import { ShowCartImageServiceService } from './show-cart-image-service.service';

describe('ShowCartImageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowCartImageServiceService]
    });
  });

  it('should be created', inject([ShowCartImageServiceService], (service: ShowCartImageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
