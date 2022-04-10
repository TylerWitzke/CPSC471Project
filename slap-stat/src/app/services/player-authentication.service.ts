import { Injectable } from '@angular/core';
import { AppComponent, Player } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { PlayerService } from './player.service';
import { PersonnalService } from './personnal.service';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

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
  constructor(private playerService: PlayerService, private personnalService: PersonnalService,private router: Router, public share: SharedService) { }

  signIn(email: string, password: string):void{
    this.tempPassword = password;
    
    this.getPlayer(email);
    
  }
  signOut(){
    this.signedIn = false;
    this.players = [];
    this.personnals = [];
    this.router.navigate(['/'])
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
      this.populatePlayer();
    }});
    
    
  }
  populatePlayer(){
    console.log('i swear to fucking god');
    if(this.players.length == 0){
      console.log('zero inside');
      return;
    }
    if(this.tempPassword != this.personnals[0].Password){
      console.log('wrong password');
      return;
    }
    
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
      // this.router.navigate(['/playerhome']);
      this.share.loggedin = true;
      this.routeNav('playerhome')
      
  }
  routeNav(link: string){
    this.router.navigate(['/'+link]);
  }

  
}

