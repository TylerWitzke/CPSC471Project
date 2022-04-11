import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoachAuthenticationService } from 'src/app/services/coach-authentication.service';
import { PersonnalService } from 'src/app/services/personnal.service';
import { PlayerAuthenticationService } from 'src/app/services/player-authentication.service';
import { PlayerService } from 'src/app/services/player.service';

export interface PeriodicElement {
  name: string;
  number: number;
  goals: number;
  assists: number;
  shots: number;
  hits: number;
  faceoff: number;
}

export interface PlayersInfo {
  teamname: string,
  number: number;
  name: string;
  goals: number;
  assists: number;
  shots: number;
  hits: number;
  faceoff: number;
}




@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'goals', 'assists', 'shots', 'hits', 'faceoff'];
  teamID: any;
  teamName: any;
  playerList: any = []
  playersList: any = []
  personnalList: any = []
  populateArray1: boolean = false;
  populateArray2: boolean = false;
  combined: PlayersInfo[] = []

 
  constructor(private player: PlayerService, private activatedRoute: ActivatedRoute, 
                  private person: PersonnalService, private playerAuth: PlayerAuthenticationService,private coachAuth: CoachAuthenticationService) { }

  ngOnInit(): void {
    
    this.teamID = this.activatedRoute.snapshot.paramMap.get('id');
    this.teamName = this.activatedRoute.snapshot.paramMap.get('teamname');
    console.log(this.teamID);

    //Get players stats
    this.player.getAllPlayer(this.teamID).subscribe(res=>{
      this.playerList = res;
      if(res){
        this.grabPlayers();
      }
    });
  }
  goHome(){
    if(this.playerAuth.signedIn){
      this.playerAuth.routeNav('playerhome')
    }
    else if(this.coachAuth.signedIn){
      this.coachAuth.routeNav('coachhome')
    }
  }

  grabPlayers(){
    this.player.getAllPlayers(this.teamID).subscribe(res=>{
      this.playersList = res;
      if(res){
        this.grabPersonnal();
      }
    });
  }

  grabPersonnal(){
    this.person.getAllPersonnal(this.teamID).subscribe(res=>{
      this.personnalList = res;
      if(res){
        this.popArray();
      }
    });
  }

  popArray()
  {
    console.log("Population time bitches");
    var j = 0;
    for (var i = 0; i < this.playerList.length; i++){

      var temp: PlayersInfo = {
        teamname: this.teamName,
        number: this.playersList[i].Number,
        name: this.playersList[i].Email,
        goals: this.playerList[i].Goals,
        assists: this.playerList[i].Assists,
        shots: this.playerList[i].Shots,
        hits: this.playerList[i].Hits,
        faceoff: Math.trunc(100*parseInt(String(this.playerList[i].F_wins))/(parseInt(String(this.playerList[i].F_wins))+parseInt(String(this.playerList[i].F_losses))))
      }

      
      while(j < this.personnalList.length){
          if(this.personnalList[j].Email == temp.name){
            temp.name = this.personnalList[j].F_Name.charAt(0)+'.'+this.personnalList[j].L_Name;
            break;
          }
        j++;
      }
      this.combined.push(temp);
      console.log(this.combined);
    }
  }

  routeProfile(){
    if(this.playerAuth.signedIn){
      this.playerAuth.routeNav('playerprofile')
    }
    else if(this.coachAuth.signedIn){
      this.coachAuth.routeNav('coachprofile')
    }
  }

  routeGame(){
    this.playerAuth.routeNav('/gamehub/'+this.teamID.toString());
  }

}
