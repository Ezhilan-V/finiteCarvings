import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, NgZone, ViewChild, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import 'src/assets/smtp.js';
import { ApiServiceService } from '../api-service.service';
declare let Email: any;
@Component({
  selector: 'app-contest-page',
  templateUrl: './contest-page.component.html',
  styleUrls: ['./contest-page.component.css']
})
export class ContestPageComponent implements OnInit {
  entries=[]
  viewEntries:boolean=false
  contestForm = this.fb.group({
    name: ["", Validators.required],
    mobNo:["", [Validators.required,Validators.min(6666666666),Validators.max(9999999999)]],
    content: ["", Validators.required]
  });
errorMessage
successMessage
  constructor(private fb: FormBuilder,private _ngZone: NgZone,public serv:ApiServiceService) {}
  @ViewChild('autosize',{static: false}) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  onSubmit() {
    console.log(this.contestForm.value);
    this.serv.submit(this.contestForm.value).subscribe((res)=>{
      this.successMessage=res.message
      console.log(res);
      alert(`Thanks! for your participation ${this.contestForm.value.name} 
      The Results will be announced shortly `);
    },(err)=>{
      console.log(err);
      this.errorMessage=err.message
    })
    // Email.send({
    //   Host : 'smtp-relay.sendinblue.com',
    //   Username : 'finitecarvings@gmail.com',
    //   Password : 'CBa3Orc5tgR4Ak76',
    //   To : 'sachstays@gmail.com',
    //   From : 'finitecarvings@gmail.com',
    //   Subject : this.contestForm.value.firstName+"phno:"+this.contestForm.value.mobNo,
    //   Body : this.contestForm.value
    //   }).then( message => {alert(message); this.contestForm.reset(); } );

    
  }
  ngOnInit(){
  //   const fs=require('fs')
  //   let rawData=fs.readFileSync('assets/data.json')
  //   let data=JSON.parse(rawData)
  //   console.log("data:",data)
  }
}
