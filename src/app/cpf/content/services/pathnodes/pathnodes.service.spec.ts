/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

import { PathnodesService } from './pathnodes.service';
import { PathNodes } from '../../content.interfaces';

// class ContentLoadServiceStub {
//   public config: any;
//   private configService: any;
// }

describe('PathnodesService as it is', () => {

  // let contentLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PathnodesService,
        // { provide: ContentLoadService, useClass: ContentLoadServiceStub },
      ]
    });
  });

  // it('', function () {
  //   expect(true).toBeTruthy();
  // });

  it('should ...', inject([PathnodesService], (service: PathnodesService) => {
    expect(service).toBeTruthy();
  }));
});
