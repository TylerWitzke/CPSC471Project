import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  readonly APIUrl = "http://127.0.0.1:6969/";
  constructor(private http:HttpClient) { }
  getTeam(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'team/'+id);
  }

  addTeam(val:any):Observable<any[]>{
    return this.http.post<any[]>(this.APIUrl + 'team/',val);
  }

  deleteTeam(id:any){
    return this.http.delete(this.APIUrl + 'team/'+id);
  }
}
