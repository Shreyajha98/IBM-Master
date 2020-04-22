import { Component, OnInit ,Input,Output} from '@angular/core';
import {Quiz} from "src/app/model/Quiz";
import { QuizService } from 'src/app/services/quiz.service';
import { HttpClient } from '@angular/common/http';
import { Option } from 'src/app/model/Option';
import { Question } from 'src/app/model/Question';
import { ActivatedRoute } from '@angular/router';
import{AppComponent} from 'src/app/app.component'
import {Router} from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

 /* @Output('data') data:String = ''
  
  op :Array<Choice>=[]
  qu:Array<Question>=[]*/


  quizes: Array<Quiz> = []
  constructor(private quizService : QuizService,private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
   this.quizService.fetchAllQuiz()
    .subscribe((res:Array<Quiz>)=> {
      console.log(res);
      this.quizes = res;
      });
}

/*Question(){
this.quizService.fetchAllQuiz(this.data)
.subscribe((res1:Array<Question>)=> {
console.log(res1);
this.qu=res1;
console.log('>>>>>>>>>>>>');


})


}*/
  A(tmp:Quiz){
    console.log(tmp);
    this.router.navigate(['que',tmp]);
  }

}
