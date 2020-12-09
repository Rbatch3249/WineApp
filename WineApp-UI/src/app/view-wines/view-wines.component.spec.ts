import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWinesComponent } from './view-wines.component';

describe('ViewWinesComponent', () => {
  let component: ViewWinesComponent;
  let fixture: ComponentFixture<ViewWinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
