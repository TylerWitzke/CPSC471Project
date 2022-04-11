import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShotService {
  readonly APIUrl = "http://127.0.0.1:6969/";
  constructor(private http:HttpClient) { }
  getShot(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'shot/'+id);
  }

  addShot(val:any):Observable<any[]>{
    return this.http.post<any[]>(this.APIUrl + 'shot/',val);
  }

  deleteShot(val:any){
    return this.http.delete(this.APIUrl + 'shot/'+val);
  }
  getTakesShot(email:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'takes/'+email);
  }

  addTakesShot(val:any){
    return this.http.post(this.APIUrl + 'takes/',val);
  }
  getTeamLogsShot(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'teamlogs/'+id);
  }

  addTeamLogsShot(val:any){
    return this.http.post(this.APIUrl + 'teamlogs/',val);
  }
  getGameLogsShot(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'gamelogs/'+id);
  }

  addGameLogsShot(val:any){
    return this.http.post(this.APIUrl + 'gamelogs/',val);
  }

}
