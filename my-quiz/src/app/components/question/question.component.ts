import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/model/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {


  

 
  constructor(private route: ActivatedRoute, private quizService: QuizService,
    private router:Router) { }

    name1:String=''
  
    question: Array<Question> = []
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
     
       console.log('***', params.get('name'));
     
       this.name1=params.get('name');

     });
     console.log(this.name1);
     this.quizService.fetchAllQuestion(this.name1).subscribe((res : Array<Question>)=> {
      console.log(res);
      this.question = res;
      });

     
    
  }

}
