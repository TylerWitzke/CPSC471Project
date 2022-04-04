import { Injectable } from '@angular/core';
import { Player } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerAuthenticationService {
  readonly APIUrl = "http://127.0.0.1:6969/";
  player: Player = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    height: 0,
    weight: 0,
    handness: '',
    number: 0,
    position: '',
    team_id: 0
  }
  constructor(private http:HttpClient) { }

  signIn(email: string, password: string): void{
    this.player.email = email;
    this.player.password = password;
    this.player.first_name = 'diler';
    this.player.last_name = 'mathzke';
    this.player.height = 195;
    this.player.weight = 225;
    this.player.handness = 'R';
    this.player.number = 69;
    this.player.position = 'RW'
    
  }
  getProfile():Player{
    return this.player;
  }

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
}

