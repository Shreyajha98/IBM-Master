import { TestBed } from '@angular/core/testing';

import { AngQuizService } from './ang-quiz.service';

describe('AngQuizService', () => {
  let service: AngQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
