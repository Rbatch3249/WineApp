import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosewineComponent } from './rosewine.component';

describe('RosewineComponent', () => {
  let component: RosewineComponent;
  let fixture: ComponentFixture<RosewineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosewineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosewineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
