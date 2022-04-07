import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatsService {
  readonly APIUrl = "http://127.0.0.1:6969/";
  constructor(private http:HttpClient) { }

  getPlayer_Stat(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'player_stats/'+id);
  }

  addPlayer_Stat(val:any){
    return this.http.post(this.APIUrl + 'player_stats/',val);
  }

  putPlayer_Stat(email: any,val:any){
    return this.http.put(this.APIUrl + 'updateplayer/'+email,val);
  }
}
