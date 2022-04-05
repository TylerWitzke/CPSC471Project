import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamStatsService {
  readonly APIUrl = "http://127.0.0.1:6969/";
  constructor(private http:HttpClient) { }
  getTeamStats(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'team_stats/'+id);
  }

  addTeamStats(val:any):Observable<any[]>{
    return this.http.post<any[]>(this.APIUrl + 'team_stats/',val);
  }

  putTeamStats(val:any){
    return this.http.put(this.APIUrl + 'personnal/',val);
  }
}
