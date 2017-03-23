import { TestBed, inject } from '@angular/core/testing';

import { ContentService } from './pathnodes.service';

describe('ContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentService]
    });
  });

  it('should ...', inject([ContentService], (service: ContentService) => {
    expect(service).toBeTruthy();
  }));
});
