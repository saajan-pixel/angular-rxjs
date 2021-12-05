import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formarray2Component } from './formarray2.component';

describe('Formarray2Component', () => {
  let component: Formarray2Component;
  let fixture: ComponentFixture<Formarray2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formarray2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formarray2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
