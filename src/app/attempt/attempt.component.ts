import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AttemptServiceClient} from '../services/AttemptServiceClient';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: AttemptServiceClient) { }
  attempt = null
  attemptId = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.attemptId = params.attemptId;
      this.service.findAttemptById(this.attemptId)
        .then(questions => this.attempt = questions);
    });
  }

}
