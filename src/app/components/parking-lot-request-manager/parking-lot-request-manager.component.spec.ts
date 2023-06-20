import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ParkingLotRequestManagerComponent} from './parking-lot-request-manager.component';

describe('ParkingLotRequestManagerComponent', () => {
  let component: ParkingLotRequestManagerComponent;
  let fixture: ComponentFixture<ParkingLotRequestManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingLotRequestManagerComponent]
    });
    fixture = TestBed.createComponent(ParkingLotRequestManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
