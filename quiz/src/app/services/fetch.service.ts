import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8000/api/quiz/'
@Injectable({
  providedIn: 'root'
})
export class FetchService {


  constructor(private http: HttpClient) { }

  fetchquiz(){
    return this.http.get(baseUrl);
  }
}
