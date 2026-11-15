import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaShopdetailComponent } from './ta-shopdetail.component';

describe('TaShopdetailComponent', () => {
  let component: TaShopdetailComponent;
  let fixture: ComponentFixture<TaShopdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaShopdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaShopdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
