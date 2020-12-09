import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Whitewine2Component } from './whitewine2.component';

describe('Whitewine2Component', () => {
  let component: Whitewine2Component;
  let fixture: ComponentFixture<Whitewine2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Whitewine2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Whitewine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
