import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Redwine1Component } from './redwine1.component';

describe('Redwine1Component', () => {
  let component: Redwine1Component;
  let fixture: ComponentFixture<Redwine1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Redwine1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Redwine1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
