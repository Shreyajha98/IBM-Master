import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8000/api/quiz/'
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  fetchAllQuiz(){
    return this.http.get(baseUrl);
  }

  fetchAllQuestion(name1:String){
    const url=baseUrl+name1;
    console.log(url);
    console.log(name1);
    return this.http.get(url);
    

  }

  

  fetchAllOption(opname:String,ppname:String)
  {
    const url=baseUrl+opname+'/'+ppname;
    console.log(url);
    return this.http.get(url);

  }

}
