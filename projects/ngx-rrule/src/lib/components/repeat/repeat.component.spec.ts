import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RepeatComponent } from './repeat.component';

describe('RepeatComponent', () => {
  let component: RepeatComponent;
  let fixture: ComponentFixture<RepeatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
