import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLetestComponent } from './combine-letest.component';

describe('CombineLetestComponent', () => {
  let component: CombineLetestComponent;
  let fixture: ComponentFixture<CombineLetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineLetestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineLetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
