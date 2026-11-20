import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SShopDetailComponent } from './s-shop-detail.component';

describe('SShopDetailComponent', () => {
  let component: SShopDetailComponent;
  let fixture: ComponentFixture<SShopDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SShopDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SShopDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
