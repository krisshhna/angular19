import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HHoteAddComponent } from './h-hote-add.component';

describe('HHoteAddComponent', () => {
  let component: HHoteAddComponent;
  let fixture: ComponentFixture<HHoteAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HHoteAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HHoteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
