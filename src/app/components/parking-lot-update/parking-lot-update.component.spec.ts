import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ParkingLotUpdateComponent} from './parking-lot-update.component';

describe('ParkingLotUpdateComponent', () => {
  let component: ParkingLotUpdateComponent;
  let fixture: ComponentFixture<ParkingLotUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingLotUpdateComponent]
    });
    fixture = TestBed.createComponent(ParkingLotUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
