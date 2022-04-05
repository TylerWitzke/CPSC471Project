import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
<<<<<<< HEAD
=======

>>>>>>> 962a322620f7045885d0232e53a1f822e9844321
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

  putPlayer_Stat(val:any){
    return this.http.put(this.APIUrl + 'player_stats/',val);
  }
}
