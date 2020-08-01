import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, NgZone, ViewChild, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import 'src/assets/smtp.js';
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
    firstName: [null, Validators.required],
    mobNo:[null, [Validators.required,Validators.min(6666666666),Validators.max(9999999999)]],
    content: ["", Validators.required]
  });

  constructor(private fb: FormBuilder,private _ngZone: NgZone) {}
  @ViewChild('autosize',{static: false}) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  onSubmit() {
    console.log(this.contestForm.value);
    this.entries.push(this.contestForm.value)
    Email.send({
      Host : 'smtp-relay.sendinblue.com',
      Username : 'finitecarvings@gmail.com',
      Password : 'CBa3Orc5tgR4Ak76',
      To : 'sachstays@gmail.com',
      From : 'finitecarvings@gmail.com',
      Subject : this.contestForm.value.firstName+"phno:"+this.contestForm.value.mobNo,
      Body : this.contestForm.value
      }).then( message => {alert(message); this.contestForm.reset(); } );
    alert(`Thanks! for your participation ${this.contestForm.value.firstName} 
    The Results will be announced shortly `);
    
  }
  ngOnInit(){
  //   const fs=require('fs')
  //   let rawData=fs.readFileSync('assets/data.json')
  //   let data=JSON.parse(rawData)
  //   console.log("data:",data)
  }
}
