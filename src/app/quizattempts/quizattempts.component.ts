import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/QuizServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quizattempts',
  templateUrl: './quizattempts.component.html',
  styleUrls: ['./quizattempts.component.css']
})
export class QuizattemptsComponent implements OnInit {
  attempts = []
  quizId = ''
  courseId = ''
  constructor(private service: QuizServiceClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId;
      this.courseId = params.courseId;
      this.service.findAttemptsById(this.quizId)
        .then(attempts => this.attempts = attempts);
    });
  }

}
