import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient {

  findQuestionsForQuiz = (quizId) =>
    fetch(`https://aqueous-cliffs-79853.herokuapp.com/api/quizzes/${quizId}/questions`)
      .then(response => response.json())
}
