import { TestBed, inject } from '@angular/core/testing';

import { AllContentService } from './all-content.service';

describe('AllContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllContentService]
    });
  });

  xit('should ...', inject([AllContentService], (service: AllContentService) => {
    expect(service).toBeTruthy();
  }));
});
