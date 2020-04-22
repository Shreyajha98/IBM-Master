import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router'
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionComponent } from './components/question/question.component';

const appRoutes: Routes = [
  { path: 'quiz', component: QuizComponent},
  {path: 'que',component:QuestionComponent},
  {path: 'app', component:  AppComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,

    QuizComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
