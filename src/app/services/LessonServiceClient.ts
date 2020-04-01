import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findLessonById = (lessonId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/jannunzi/lessons/${lessonId}`)
      .then(response => response.json())

  findAllLessons = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/jannunzi/lessons')
      .then(response => response.json())

  findLessonsForModule = (mid) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/jannunzi/modules/${mid}/lessons`)
      .then(response => response.json())
}
