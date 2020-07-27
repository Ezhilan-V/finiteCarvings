import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contest-page',
  templateUrl: './contest-page.component.html',
  styleUrls: ['./contest-page.component.css']
})
export class ContestPageComponent {
  entries=[]
  viewEntries:boolean=false
  contestForm = this.fb.group({
    firstName: [null, Validators.required],
    mobNo:[null, [Validators.required,Validators.min(6666666666),Validators.max(9999999999)]],
    content: [null, Validators.required]
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
    alert(`Thanks! for your participation ${this.contestForm.value.firstName} 
    The Results will be announced shortly `);
  }
}
