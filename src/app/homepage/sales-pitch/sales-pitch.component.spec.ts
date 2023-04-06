import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPitchComponent } from './sales-pitch.component';

describe('SalesPitchComponent', () => {
  let component: SalesPitchComponent;
  let fixture: ComponentFixture<SalesPitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesPitchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SalesPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
