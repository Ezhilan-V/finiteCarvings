import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-view-submission',
  templateUrl: './view-submission.component.html',
  styleUrls: ['./view-submission.component.css']
})
export class ViewSubmissionComponent implements OnInit {

  constructor(public serv:ApiServiceService) { }
submissions
  ngOnInit() {
    this.serv.getSubmission().subscribe((res)=>{
      this.submissions=res
      console.log(res);
      
    },(err)=>{
      console.log(err);
      
    })
  }

}
