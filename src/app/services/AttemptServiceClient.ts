import {Injectable} from '@angular/core';

@Injectable()
export class AttemptServiceClient {
  findAttemptById = async (aid) => {
    const response = await fetch(`https://aqueous-cliffs-79853.herokuapp.com/api/attempts/${aid}`);
    return response.json();
  }
}
