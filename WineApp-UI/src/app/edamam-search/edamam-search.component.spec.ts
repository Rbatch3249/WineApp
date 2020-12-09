import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdamamSearchComponent } from './edamam-search.component';

describe('EdamamSearchComponent', () => {
  let component: EdamamSearchComponent;
  let fixture: ComponentFixture<EdamamSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdamamSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdamamSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
