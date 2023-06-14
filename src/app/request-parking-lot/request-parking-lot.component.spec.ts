import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestParkingLotComponent } from './request-parking-lot.component';

describe('RequestParkingLotComponent', () => {
  let component: RequestParkingLotComponent;
  let fixture: ComponentFixture<RequestParkingLotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestParkingLotComponent]
    });
    fixture = TestBed.createComponent(RequestParkingLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
