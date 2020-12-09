import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Whitewine4Component } from './whitewine4.component';

describe('Whitewine4Component', () => {
  let component: Whitewine4Component;
  let fixture: ComponentFixture<Whitewine4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Whitewine4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Whitewine4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
