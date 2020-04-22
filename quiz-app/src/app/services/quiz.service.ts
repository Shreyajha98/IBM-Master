import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';




const baseUrl='http://localhost:8000/api/quiz/';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  fetchAllQuiz(){
    return this.http.get(baseUrl);
    
  }

  fetchSingleQuizQuestion(quizName:string){
    return this.http.get(baseUrl+quizName);
   // const url=b+quizName;
   // console.log(url);
    //console.log(quizName);
    //this.http.get('http://localhost:8000/api/quiz/js');
    console.log(quizName);
  }
}
