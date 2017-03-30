/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

import { PathnodesService } from './pathnodes.service';
import { PathHelpers } from './pathnodes-service-helpers.interface';
import { PathNodes } from '../../content.interfaces';
import { test2 } from '../../../../testing/data/test2';

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

  describe('getNormPathNodesString', () => {
    it('should not change correct fragments', inject([PathnodesService], (service: PathnodesService) => {
      const fragment = 'franz/ulrich';
      expect(service.getNormPathNodesString(fragment)).toBe('franz/ulrich');
    }));

    it('should replace duplicate // with one /', inject([PathnodesService], (service: PathnodesService) => {
      const fragment = 'franz//ulrich';
      expect(service.getNormPathNodesString(fragment)).toBe('franz/ulrich');
    }));

    it('should replace duplicate // with one /', inject([PathnodesService], (service: PathnodesService) => {
      const fragment = 'franz///ulrich';
      expect(service.getNormPathNodesString(fragment)).toBe('franz/ulrich');
    }));

    it('should remove duplicates /// and / at the end', inject([PathnodesService], (service: PathnodesService) => {
      const fragment1 = 'franz///ulrich///';
      expect(service.getNormPathNodesString(fragment1)).toBe('franz/ulrich');
      const fragment2 = 'franz///ulrich/';
      expect(service.getNormPathNodesString(fragment2)).toBe('franz/ulrich');
    }));
  });


  xdescribe('getNodesArrays', () => {
    it('should give back correct fragmentsArray - even case', inject([PathnodesService], (service: PathnodesService) => {
      const fragmentsArray = ['projects', '7', 'subprojects', '2'];
      const result: PathHelpers = {typesArray: ['projects', 'subprojects' ], indexArray: [7, 2]};
      expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
    }));

    it('should give back correct fragmentsArray - uneven case', inject([PathnodesService], (service: PathnodesService) => {
      const fragmentsArray = ['projects', '7', 'subprojects'];
      const result: PathHelpers = {typesArray: ['projects', 'subprojects' ], indexArray: [7, 2]};
      expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
    }));

    it('full - even case', inject([PathnodesService], (service: PathnodesService) => {
      const fragment = 'projects/7/subprojects/2';
      const normalizedFragment = service.getNormPathNodesString(fragment);
      const fragmentsArray = service.getPathStringsArray(normalizedFragment);
      const result: PathHelpers = {typesArray: ['projects', 'subprojects' ], indexArray: [7, 2]};
      expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
    }));

    it('full - uneven case', inject([PathnodesService], (service: PathnodesService) => {
      const fragment = 'projects/7/subprojects';
      const normalizedFragment = service.getNormPathNodesString(fragment);
      const fragmentsArray = service.getPathStringsArray(normalizedFragment);
      const result: PathHelpers = {typesArray: ['projects', 'subprojects'], indexArray: [7]};
      expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
    }));
  });

  describe('getBasePathNodes test2', () => {
    let typesArray: string[];
    let indexArray: number[];
    let dwNodes: any = test2.projects;
    xit('should give back subprojects - pathNodes undefined', inject([PathnodesService], (service: PathnodesService) => {
      typesArray = ['projects', 'subprojects'];
      indexArray = [0, 1];
      dwNodes = test2.projects;
      const result = {};
      expect(service.getBasePathNodes(dwNodes, typesArray, indexArray)).toEqual(jasmine.objectContaining(result));
    }));

    xit('should give back subprojects - pathNodes defined', inject([PathnodesService], (service: PathnodesService) => {
      typesArray = ['subprojects'];
      indexArray = [0];
      const cpfNodes = test2;
      const result = null;
      const pathNodes = <PathNodes>[];
      expect(service.getBasePathNodes(cpfNodes, typesArray, indexArray)).toEqual(jasmine.objectContaining(result));
    }));
  });
});
