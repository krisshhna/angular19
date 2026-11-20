import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HHotelListComponent } from './h-hotel-list.component';

describe('HHotelListComponent', () => {
  let component: HHotelListComponent;
  let fixture: ComponentFixture<HHotelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HHotelListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HHotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
