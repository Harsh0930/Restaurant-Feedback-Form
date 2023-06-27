import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../model/feedback';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedback_url:string="http://localhost:3000/feedbacks";
  
  constructor(private http:HttpClient) { }

  saveFeedback(feedback:Feedback):Observable<Feedback>{
    return this.http.post<Feedback>(this.feedback_url,feedback);

  }
}
