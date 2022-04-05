import { Injectable } from '@angular/core';
import { Player } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { PlayerService } from './player.service';
import { PersonnalService } from './personnal.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerAuthenticationService {
  tempPassword: string = '';
  first: boolean = true;
  signedIn: boolean = false;
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
  players:any = []
  personnals:any = []
  constructor(private playerService: PlayerService, private personnalService: PersonnalService) { }

  signIn(email: string, password: string):void{
    
    
    this.getPlayer(email);
    
   
    if(this.players.length == 0){

      console.log('zero');
      return;
    }
    console.log(this.players);
    console.log(this.personnals);
    
    this.tempPassword = this.personnals[0].Password;
    //if(this.tempPassword === password){
      console.log('i swear to fucking god');
      this.player.email = this.personnals[0].Email;
      this.player.password = this.personnals[0].Password;
      this.player.first_name = this.personnals[0].F_Name;
      this.player.last_name = this.personnals[0].L_Name;
      this.player.team_id = this.personnals[0].Team_ID;
      this.player.height = this.players[0].Height;
      this.player.weight = this.players[0].Weight;
      this.player.handness = this.players[0].Handedness;
      this.player.number = this.players[0].Number;
      this.player.position = this.players[0].Position;
      this.signedIn = true;
      
    //}
    

    
  }
  getProfile():Player{
    return this.player;
  }
  getPlayer(email:string){
    this.playerService.getPlayer(email).subscribe(response =>{this.players = response;
    if(response){
      this.getPersonnal(email);
    }});
    
  }
  getPersonnal(email:string){
    this.personnalService.getPersonnal(email).subscribe(response =>{this.personnals = response;
    if(response){
      this.func();
    }});
    
    
  }
  func(){
    console.log('done');
  }

  
}

