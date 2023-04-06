import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmTreePage2Component } from './palm-tree-page2.component';

describe('PalmTreePage2Component', () => {
  let component: PalmTreePage2Component;
  let fixture: ComponentFixture<PalmTreePage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PalmTreePage2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(PalmTreePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
