import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HHeaderComponent } from './h-header.component';

describe('HHeaderComponent', () => {
  let component: HHeaderComponent;
  let fixture: ComponentFixture<HHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
