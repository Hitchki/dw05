

// class ContentLoadService {
//   public config: any;
//   private configService: any;
// }

// export class FakeFancyService extends FancyService {
//   value: string = 'faked value';
// }

import { PathnodesService } from './pathnodes.service';

fdescribe('!!!!pathnodes.service.no-testbed.spec', () => {

  let pathnodesService;
  // let contentLoadService: ContentLoadService = new ContentLoadService();

  beforeEach( () => {
    // const fake =  { getValue: () => 'fake value' };
    pathnodesService = new PathnodesService();
  });

  fdescribe('loadTestTree', () => {

    fit('', function () {
      expect(true).toBeTruthy();
    });

    fit('', function () {
      const abc = pathnodesService.getNormPathNodesString('abc//abc');
      expect(abc).toBe('abc/abc');
    });

  });


  // it('always true', function () {
  //   expect(true).toBeTruthy();
  // });
});
