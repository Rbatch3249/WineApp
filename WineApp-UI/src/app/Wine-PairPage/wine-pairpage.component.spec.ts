import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinePairComponent } from './wine-pairpage.component';

describe('WinePairComponent', () => {
  let component: WinePairComponent;
  let fixture: ComponentFixture<WinePairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinePairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinePairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
