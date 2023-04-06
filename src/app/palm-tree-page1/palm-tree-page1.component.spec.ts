import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmTreePage1Component } from './palm-tree-page1.component';

describe('PalmTreePage1Component', () => {
  let component: PalmTreePage1Component;
  let fixture: ComponentFixture<PalmTreePage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PalmTreePage1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(PalmTreePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
