import { TestBed, inject } from '@angular/core/testing';
import { ContentService } from './content.service'


describe('ContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentService]
    });
  });

  xit('should ...', inject([ContentService], (service: ContentService) => {
    expect(service).toBeTruthy();
  }));
});
