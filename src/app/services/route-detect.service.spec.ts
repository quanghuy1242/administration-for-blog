import { TestBed } from '@angular/core/testing';

import { RouteDetectService } from './route-detect.service';

describe('RouteDetectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteDetectService = TestBed.get(RouteDetectService);
    expect(service).toBeTruthy();
  });
});
