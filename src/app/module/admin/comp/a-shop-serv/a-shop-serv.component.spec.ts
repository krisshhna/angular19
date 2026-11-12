import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AShopServComponent } from './a-shop-serv.component';

describe('AShopServComponent', () => {
  let component: AShopServComponent;
  let fixture: ComponentFixture<AShopServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AShopServComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AShopServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
