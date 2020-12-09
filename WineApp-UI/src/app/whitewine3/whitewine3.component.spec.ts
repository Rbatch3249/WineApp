import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Whitewine3Component } from './whitewine3.component';

describe('Whitewine3Component', () => {
  let component: Whitewine3Component;
  let fixture: ComponentFixture<Whitewine3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Whitewine3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Whitewine3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
