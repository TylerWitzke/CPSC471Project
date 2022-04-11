import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoachAuthenticationService } from 'src/app/services/coach-authentication.service';
import { GameService } from 'src/app/services/game.service';
import { PlayerAuthenticationService } from 'src/app/services/player-authentication.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  gameID :any;
  game: any;
  gamesheet: any;
  team: any;
  homeaway: any;

  constructor(private activatedRoute: ActivatedRoute, private gameserv: GameService, private teamserv: TeamService,
                private playerAuth: PlayerAuthenticationService, private coachAuth: CoachAuthenticationService) { }

  ngOnInit(): void {
    this.gameID = this.activatedRoute.snapshot.paramMap.get('gameid');
    console.log(this.gameID);

    this.gameserv.getgame(this.gameID).subscribe(res=>{
      this.game = res;
      if(res){
        this.getGameSheet();
        console.log(this.game)
      }
    });
  }

  getGameSheet(){
    this.gameserv.getGameSheet(this.gameID).subscribe(res=>{
      this.gamesheet = res;
      if(res){
        console.log(this.gamesheet)
        if(this.game[0].HomeAway.indexOf('H') > -1) this.game[0].HomeAway = "Home";
        else this.game[0].HomeAway = "Away";
        this.getTeamInfo();
      }
    });

  }

  getTeamInfo(){
    this.teamserv.getTeam(this.game[0].Team_ID).subscribe(res=>{
      this.team = res;
      if(res){
        console.log(this.team)
      }
    });
  }

  routeLeader(){
    console.log("Here");
    this.playerAuth.routeNav('/leaderboard/'+this.team[0].Team_ID.toString()+'/'+this.team[0].Name)
  }

  routeProfile(){
    if(this.playerAuth.signedIn){
      this.playerAuth.routeNav('playerprofile')
    }
    else if(this.coachAuth.signedIn){
      this.coachAuth.routeNav('coachprofile')
    }
    
  }

  routeHome(){
    if(this.playerAuth.signedIn){
      this.playerAuth.routeNav('playerhome')
    }
    else if(this.coachAuth.signedIn){
      this.coachAuth.routeNav('coachhome')
    }
    
  }

  routeGameHub(){
    this.playerAuth.routeNav('/gamehub/'+this.team[0].Team_ID.toString());
  }


}
