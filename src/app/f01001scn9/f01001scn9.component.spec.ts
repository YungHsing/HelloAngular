import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F01001scn9Component } from './f01001scn9.component';

describe('F01001scn9Component', () => {
  let component: F01001scn9Component;
  let fixture: ComponentFixture<F01001scn9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F01001scn9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(F01001scn9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
