import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Whitewine5Component } from './whitewine5.component';

describe('Whitewine5Component', () => {
  let component: Whitewine5Component;
  let fixture: ComponentFixture<Whitewine5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Whitewine5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Whitewine5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
