/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadContentEffectService } from './load-content-effect.service';

describe('LoadContentEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadContentEffectService]
    });
  });

  xit('should ...', inject([LoadContentEffectService], (service: LoadContentEffectService) => {
    expect(service).toBeTruthy();
  }));
});
