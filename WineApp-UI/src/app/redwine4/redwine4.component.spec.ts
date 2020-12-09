import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Redwine4Component } from './redwine4.component';

describe('Redwine4Component', () => {
  let component: Redwine4Component;
  let fixture: ComponentFixture<Redwine4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Redwine4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Redwine4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
