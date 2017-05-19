import { TestBed, inject } from '@angular/core/testing';

import { LessonServiceService } from './lesson.service';

describe('LessonServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LessonServiceService]
    });
  });

  it('should ...', inject([LessonServiceService], (service: LessonServiceService) => {
    expect(service).toBeTruthy();
  }));
});
