import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewQuizComponent } from './components/view-quiz/view-quiz.component';
import { TakeQuizComponent } from './components/take-quiz/take-quiz.component';
import { ResultComponent } from './components/result/result.component';
import {Routes, RouterModule} from '@angular/router'
import { HttpClientModule, HttpClient } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'view',component: ViewQuizComponent } ,
  { path: 'takeQuiz',component: TakeQuizComponent } ,
  { path: 'viewResult',component: ResultComponent }
]




@NgModule({
  declarations: [
    AppComponent,
    ViewQuizComponent,
    TakeQuizComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,
      {enableTracing:true}
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
