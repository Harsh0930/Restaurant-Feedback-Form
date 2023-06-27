import { Component, OnInit } from '@angular/core';
import { Feedback } from '../model/feedback';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private feedbackservice:FeedbackService,private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  feedback:Feedback={};
  location=['Huntsville','Springdale','Orlando','Augusta','New York'];

  onSubmit(feedbackForm:any){
    this.feedbackservice.saveFeedback(feedbackForm.value).subscribe({
      next:data=>{
        this._snackbar.open("Feedback submiited successfully", "success",{
          duration:5000,
          panelClass:['mat-toolbar','mat-primary']
        })
      },
      error:error=>{
        alert("Failing while connecting to server, try again!!");
      }
    })
  }

}
