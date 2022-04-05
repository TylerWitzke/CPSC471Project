import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonnalService {
  readonly APIUrl = "http://127.0.0.1:6969/";

  constructor(private http:HttpClient) { }

  getPlayer(email:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'personnal/'+email);
  }

  addPlayer(val:any){
    return this.http.post(this.APIUrl + 'personnal/',val);
  }

  deletePlayer(email:any){
    return this.http.delete(this.APIUrl + 'personnal/'+email);
  }
}
