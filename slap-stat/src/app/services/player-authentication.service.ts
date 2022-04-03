import { Injectable } from '@angular/core';
import { Player } from '../app.component';
@Injectable({
  providedIn: 'root'
})
export class PlayerAuthenticationService {
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
  constructor() { }

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
}
