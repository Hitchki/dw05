import { PathnodesService } from './pathnodes.service';

fdescribe('!!!!pathnodes.service.no-testbed.spec', () => {

  let service;
  // let contentLoadService: ContentLoadService = new ContentLoadService();

  beforeEach( () => {
    // const fake =  { getValue: () => 'fake value' };
    service = new PathnodesService();
  });

  fdescribe('loadTestTree', () => {

    fit('', function () {
      expect(true).toBeTruthy();
    });

    fit('', function () {
      const abc = service.getNormPathNodesString('abc//abc');
      expect(abc).toBe('abc/abc');
    });
  });

  describe('getNormPathNodesString', () => {
    it('should not change correct fragments', () => {
      const fragment = 'franz/ulrich';
      expect(service.getNormPathNodesString(fragment)).toBe('franz/ulrich');
    });

    it('should replace duplicate // with one /', () => {
      const fragment = 'franz//ulrich';
      expect(service.getNormPathNodesString(fragment)).toBe('franz/ulrich');
    });

    it('should replace duplicate // with one /', () => {
      const fragment = 'franz///ulrich';
      expect(service.getNormPathNodesString(fragment)).toBe('franz/ulrich');
    });

    it('should remove duplicates /// and / at the end', () => {
      const fragment1 = 'franz///ulrich///';
      expect(service.getNormPathNodesString(fragment1)).toBe('franz/ulrich');
      const fragment2 = 'franz///ulrich/';
      expect(service.getNormPathNodesString(fragment2)).toBe('franz/ulrich');
    });
  });

  describe('getNodesArrays', () => {
    it('should give back correct fragmentsArray - even case', () => {
      const fragmentsArray = ['projects', '7', 'subprojects', '2'];
      const result: any = [['projects', 'subprojects'], [7, 2]];
      expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
    });
  });

  // xdescribe('getNodesArrays', () => {
  //   it('should give back correct fragmentsArray - even case', inject([PathnodesService], (service: PathnodesService) => {
  //     const fragmentsArray = ['projects', '7', 'subprojects', '2'];
  //     const result: PathHelpers = {typesArray: ['projects', 'subprojects' ], indexArray: [7, 2]};
  //     expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
  //   }));
  //
  //   it('should give back correct fragmentsArray - uneven case', inject([PathnodesService], (service: PathnodesService) => {
  //     const fragmentsArray = ['projects', '7', 'subprojects'];
  //     const result: PathHelpers = {typesArray: ['projects', 'subprojects' ], indexArray: [7, 2]};
  //     expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
  //   }));
  //
  //   it('full - even case', inject([PathnodesService], (service: PathnodesService) => {
  //     const fragment = 'projects/7/subprojects/2';
  //     const normalizedFragment = service.getNormPathNodesString(fragment);
  //     const fragmentsArray = service.getPathStringsArray(normalizedFragment);
  //     const result: PathHelpers = {typesArray: ['projects', 'subprojects' ], indexArray: [7, 2]};
  //     expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
  //   }));
  //
  //   it('full - uneven case', inject([PathnodesService], (service: PathnodesService) => {
  //     const fragment = 'projects/7/subprojects';
  //     const normalizedFragment = service.getNormPathNodesString(fragment);
  //     const fragmentsArray = service.getPathStringsArray(normalizedFragment);
  //     const result: PathHelpers = {typesArray: ['projects', 'subprojects'], indexArray: [7]};
  //     expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
  //   }));
  // });
});
