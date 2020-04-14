import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizattemptsComponent } from './quizattempts.component';

describe('QuizattemptsComponent', () => {
  let component: QuizattemptsComponent;
  let fixture: ComponentFixture<QuizattemptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizattemptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizattemptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
