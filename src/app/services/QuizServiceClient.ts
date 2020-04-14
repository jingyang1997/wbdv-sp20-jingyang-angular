import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('https://aqueous-cliffs-79853.herokuapp.com/api/quizzes')
      .then(response => response.json())

  findQuizById = (qid) =>
    fetch(`https://aqueous-cliffs-79853.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())
  findAttemptsById = (qid) =>
    fetch(`https://aqueous-cliffs-79853.herokuapp.com/api/quizzes/${qid}/attempts`)
      .then(response => response.json())
}
