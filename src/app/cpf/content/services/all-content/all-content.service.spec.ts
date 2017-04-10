import { TestBed, inject } from '@angular/core/testing';

import { AllContentService } from './all-content.service';
import { PathnodesService } from '../pathnodes/pathnodes.service';

describe('AllContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllContentService, PathnodesService]
    });
  });

  xit('should ...', inject([AllContentService], (service: AllContentService) => {
    expect(service).toBeTruthy();
  }));

  it('should ...', inject([AllContentService, PathnodesService], (service: AllContentService) => {
    expect(service).toBeTruthy();
  }));

  it('should replace projects', inject([AllContentService, PathnodesService], (service: AllContentService) => {
    const urlPath = 'test2/projects/0/normtext/0/normtext/0';
    console.log(service.getContentPath(urlPath));
    expect(service.getContentPath(urlPath)).toEqual('normtext/0/normtext/0');
  }));

  it('should replace subprojects', inject([AllContentService, PathnodesService], (service: AllContentService) => {
    const urlPath = 'test2/projects/0/subprojects/0/normtext/0/normtext/0';
    console.log(service.getContentPath(urlPath));
    expect(service.getContentPath(urlPath)).toEqual('normtext/0/normtext/0');
  }));
});
