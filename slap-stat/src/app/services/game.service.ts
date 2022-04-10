import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  readonly APIUrl = "http://127.0.0.1:6969/";
  constructor(private http:HttpClient) { }
  getgame(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'game/'+id);
  }

  addGame(val:any):Observable<any[]>{
    return this.http.post<any[]>(this.APIUrl + 'game/',val);
  }

  deleteGame(id:any){
    return this.http.delete(this.APIUrl + 'game/'+id);
  }

  getAllGame(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'allgame/'+id);
  }

  getGameSheet(gameid:any):Observable<any>{
    return this.http.get<any>(this.APIUrl +'game_sheet/'+gameid);
  }
}
