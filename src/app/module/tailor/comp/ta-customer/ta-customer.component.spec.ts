import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaCustomerComponent } from './ta-customer.component';

describe('TaCustomerComponent', () => {
  let component: TaCustomerComponent;
  let fixture: ComponentFixture<TaCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
