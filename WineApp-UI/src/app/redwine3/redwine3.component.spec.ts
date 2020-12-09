import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Redwine3Component } from './redwine3.component';

describe('Redwine3Component', () => {
  let component: Redwine3Component;
  let fixture: ComponentFixture<Redwine3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Redwine3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Redwine3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
