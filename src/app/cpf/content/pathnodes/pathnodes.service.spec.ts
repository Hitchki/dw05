/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

import { PathnodesService } from './pathnodes.service';
import { PathNodesStringsHelpers } from './pathnodes-service-helpers.interface';
import { PathNodes } from '../content.interfaces'
import { test2 } from '../../../testing/data/test2'

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

  it('should ...', inject([PathnodesService], (service: PathnodesService) => {
    expect(service).toBeTruthy();
  }));

  xdescribe('getNormalizedPathNodesString', () => {
    it('should not change correct fragments', inject([PathnodesService], (service: PathnodesService) => {
      const fragment = 'franz/ulrich';
      expect(service.getNormalizedPathNodesString(fragment)).toBe('franz/ulrich');
    }));

    it('should replace duplicate // with one /', inject([PathnodesService], (service: PathnodesService) => {
      const fragment = 'franz//ulrich';
      expect(service.getNormalizedPathNodesString(fragment)).toBe('franz/ulrich');
    }));

    it('should replace duplicate // with one /', inject([PathnodesService], (service: PathnodesService) => {
      const fragment = 'franz///ulrich';
      expect(service.getNormalizedPathNodesString(fragment)).toBe('franz/ulrich');
    }));

    it('should remove duplicates /// and / at the end', inject([PathnodesService], (service: PathnodesService) => {
      const fragment = 'franz///ulrich/';
      expect(service.getNormalizedPathNodesString(fragment)).toBe('franz/ulrich');
    }));
  });


  xdescribe('getNodesArrays', () => {
    it('should give back correct fragmentsArray - even case', inject([PathnodesService], (service: PathnodesService) => {
      const fragmentsArray = ['projects', '7', 'subprojects', '2'];
      const result: PathNodesStringsHelpers = {pathTypesArray: ['projects','subprojects' ],pathIndexArray:[7,2]};
       expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
    }));

    it('should give back correct fragmentsArray - uneven case', inject([PathnodesService], (service: PathnodesService) => {
      const fragmentsArray = ['projects', '7', 'subprojects'];
      const result: PathNodesStringsHelpers = {pathTypesArray: ['projects','subprojects' ],pathIndexArray:[7]};
     expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
    }));

    it('full - even case', inject([PathnodesService], (service: PathnodesService) => {
      const fragment = 'projects/7/subprojects/2';
      const normalizedFragment = service.getNormalizedPathNodesString(fragment);
      const fragmentsArray = service.getPathNodesStringsArray(normalizedFragment);
      const result: PathNodesStringsHelpers = {pathTypesArray: ['projects','subprojects' ],pathIndexArray:[7,2]};
      expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
    }));

    it('full - uneven case', inject([PathnodesService], (service: PathnodesService) => {
      const fragment = 'projects/7/subprojects';
      const normalizedFragment = service.getNormalizedPathNodesString(fragment);
      const fragmentsArray = service.getPathNodesStringsArray(normalizedFragment);
      const result: PathNodesStringsHelpers = {pathTypesArray: ['projects','subprojects' ],pathIndexArray:[7]};
      expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
    }));
  });

  xdescribe('getPathNodesFRA test2', () => {
    let pathTypesArray: string[];
    let pathIndexArray: number[];
    let dwNodes: any = test2.projects;
    it('should give back subprojects - pathNodes undefined', inject([PathnodesService], (service: PathnodesService) => {
      pathTypesArray = ['projects', 'subprojects'];
      pathIndexArray = [0, 1];
      dwNodes = test2.projects;
      const result = {};
      expect(service.getPathNodesFRA(dwNodes, pathTypesArray, pathIndexArray)).toEqual(jasmine.objectContaining(result));
    }));

    xit('should give back subprojects - pathNodes defined', inject([PathnodesService], (service: PathnodesService) => {
      pathTypesArray = ['subprojects'];
      pathIndexArray = [0];
      const cpfNodes = test2;
      const result = null;
      const pathNodes = <PathNodes>[];
      expect(service.getPathNodesFRA(cpfNodes, pathTypesArray, pathIndexArray)).toEqual(jasmine.objectContaining(result));
    }));
  });
});
