import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(public http:HttpClient) { }
  getSubmission():Observable<any>{
    return this.http.get<any>("https://us-central1-mytestapi-26151.cloudfunctions.net/webApi/api/v1/submission")
  }
  submit(val):Observable<any>{
    return this.http.post<any>("https://us-central1-mytestapi-26151.cloudfunctions.net/webApi/api/v1/contest",val)
  }
}
