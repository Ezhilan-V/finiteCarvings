import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewSubmissionComponent } from './view-submission/view-submission.component';
import { ContestPageComponent } from './contest-page/contest-page.component';


const routes: Routes = [
  
  {path:"viewSubmission",component:ViewSubmissionComponent},
  {path:"",component:ContestPageComponent},
  {path:"**",redirectTo:"/",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
