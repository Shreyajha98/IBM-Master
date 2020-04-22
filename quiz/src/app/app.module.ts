import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngQuizComponent } from './ang-quiz/ang-quiz.component';
import { ResultComponent } from './result/result.component';
import { appRoutes } from './routes';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    AngQuizComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
