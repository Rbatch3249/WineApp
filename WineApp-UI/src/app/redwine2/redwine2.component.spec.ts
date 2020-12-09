import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Redwine2Component } from './redwine2.component';

describe('Redwine2Component', () => {
  let component: Redwine2Component;
  let fixture: ComponentFixture<Redwine2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Redwine2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Redwine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
