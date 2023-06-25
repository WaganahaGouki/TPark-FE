import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ParkingLotAddComponent} from './parking-lot-add.component';

describe('ParkingLotRequestManagerComponent', () => {
  let component: ParkingLotAddComponent;
  let fixture: ComponentFixture<ParkingLotAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingLotAddComponent]
    });
    fixture = TestBed.createComponent(ParkingLotAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
