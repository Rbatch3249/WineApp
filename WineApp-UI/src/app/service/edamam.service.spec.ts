import { TestBed, inject } from '@angular/core/testing';

import { EdamamService } from './edamam.service';

describe('EdamamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EdamamService]
    });
  });

  it('should be created', inject([EdamamService], (service: EdamamService) => {
    expect(service).toBeTruthy();
  }));
});
