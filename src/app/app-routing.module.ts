import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './course-table/course-table.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {HomeComponent} from './home/home.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'table/courses', component: CourseTableComponent},
  {path: 'table/:courseId/modules', component: CourseViewerComponent},
  {path: 'table/:courseId/modules/:moduleId/lessons', component: CourseViewerComponent},
  {path: 'table/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: CourseViewerComponent},
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  { path: 'courses/:courseId/quizzes/:quizId', component: QuizComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
