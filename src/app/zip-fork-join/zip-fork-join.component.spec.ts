import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipForkJoinComponent } from './zip-fork-join.component';

describe('ZipForkJoinComponent', () => {
  let component: ZipForkJoinComponent;
  let fixture: ComponentFixture<ZipForkJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipForkJoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipForkJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
