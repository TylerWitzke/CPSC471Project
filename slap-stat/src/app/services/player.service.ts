import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  readonly APIUrl = "http://127.0.0.1:6969/";
  constructor(private http:HttpClient) { }
  getPlayer(email:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'player/'+email);
  }

  addPlayer(val:any){
    return this.http.post(this.APIUrl + 'player/',val);
  }

  putPlayer(val:any){
    return this.http.put(this.APIUrl + 'player/',val);
  }

  deletePlayer(val:any){
    return this.http.delete(this.APIUrl + 'player/'+val);
  }

  //Gets all player stats relating to that specific team ID
  getAllPlayer(teamid:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'allplayer/'+teamid);
  }

  //Gets all players relating to that specific team ID
  getAllPlayers(teamid:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'allplayers/'+teamid);
  }
}
