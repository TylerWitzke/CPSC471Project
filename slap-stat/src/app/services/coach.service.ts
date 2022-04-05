import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  readonly APIUrl = "http://127.0.0.1:6969/";

  constructor(private http:HttpClient) { }

  getCoach(email:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'coach/'+email);
  }

  addCoach(val:any){
    return this.http.post(this.APIUrl + 'coach/',val);
  }

  deleteCoach(email:any){
    return this.http.delete(this.APIUrl + 'coach/'+email);
  }
}
