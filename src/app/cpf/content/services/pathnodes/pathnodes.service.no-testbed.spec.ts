

// class ContentLoadService {
//   public config: any;
//   private configService: any;
// }

// export class FakeFancyService extends FancyService {
//   value: string = 'faked value';
// }

describe('!!!!pathnodes.service.no-testbed.spec', () => {

  // let centralService;
  // let contentLoadService: ContentLoadService = new ContentLoadService();

  beforeEach( () => {
    const fake =  { getValue: () => 'fake value' };
    // centralService = new CentralService(fake as ContentLoadService);
  });

  describe('loadTestTree', () => {

    it('', function () {
      expect(true).toBeTruthy();
    });
  });


  // it('always true', function () {
  //   expect(true).toBeTruthy();
  // });
});
