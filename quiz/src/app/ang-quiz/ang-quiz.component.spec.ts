import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngQuizComponent } from './ang-quiz.component';

describe('AngQuizComponent', () => {
  let component: AngQuizComponent;
  let fixture: ComponentFixture<AngQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
