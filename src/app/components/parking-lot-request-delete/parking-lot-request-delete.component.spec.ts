import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLotRequestDeleteComponent } from './parking-lot-request-delete.component';

describe('ParkingLotRequestDeleteComponent', () => {
  let component: ParkingLotRequestDeleteComponent;
  let fixture: ComponentFixture<ParkingLotRequestDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingLotRequestDeleteComponent]
    });
    fixture = TestBed.createComponent(ParkingLotRequestDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
