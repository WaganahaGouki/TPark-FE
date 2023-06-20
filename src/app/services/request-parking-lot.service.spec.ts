import {TestBed} from '@angular/core/testing';

import {RequestParkingLotService} from './request-parking-lot.service';

describe('RequestParkingLotService', () => {
  let service: RequestParkingLotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestParkingLotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
