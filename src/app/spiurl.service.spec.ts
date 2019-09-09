import { TestBed, inject } from '@angular/core/testing';

import { SpiurlService } from './spiurl.service';

describe('SpiurlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpiurlService]
    });
  });

  it('should be created', inject([SpiurlService], (service: SpiurlService) => {
    expect(service).toBeTruthy();
  }));
});
