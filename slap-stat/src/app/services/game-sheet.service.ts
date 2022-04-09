import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameSheetService {
  readonly APIUrl = "http://127.0.0.1:6969/";
  constructor(private http:HttpClient) { }

  getGame_Sheet(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'game_sheet/'+id);
  }

  addGame_Sheet(val:any){
    return this.http.post(this.APIUrl + 'game_sheet/',val);
  }

  putGame_Sheet(val:any){
    return this.http.put(this.APIUrl + 'game_sheet/',val);
  }
}