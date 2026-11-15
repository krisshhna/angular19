import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaHeaderComponent } from './ta-header.component';

describe('TaHeaderComponent', () => {
  let component: TaHeaderComponent;
  let fixture: ComponentFixture<TaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
