import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Whitewine1Component } from './whitewine1.component';

describe('Whitewine1Component', () => {
  let component: Whitewine1Component;
  let fixture: ComponentFixture<Whitewine1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Whitewine1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Whitewine1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
