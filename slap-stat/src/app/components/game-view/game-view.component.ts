import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoachAuthenticationService } from 'src/app/services/coach-authentication.service';
import { GameService } from 'src/app/services/game.service';
import { PlayerAuthenticationService } from 'src/app/services/player-authentication.service';
import { ShotService } from 'src/app/services/shot.service';
import { TeamService } from 'src/app/services/team.service';
import { HostListener } from '@angular/core';

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
  plottedShots: any = [];
  homeaway: any;
  gameShots: any = [];
  coachsignedin: boolean = false;
  
  shots: any = [];

  constructor(private activatedRoute: ActivatedRoute, private gameserv: GameService, private teamserv: TeamService,
                private playerAuth: PlayerAuthenticationService, private coachAuth: CoachAuthenticationService,
                private shotServe: ShotService) { }

  ngOnInit(): void {
    this.coachsignedin = this.coachAuth.signedIn;
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
        this.getGameShots();
      }
    });
  }
  getGameShots(){
    this.shotServe.getGameLogsShot(this.gameID).subscribe(res=>{
      this.gameShots = res;
      if(res){
        this.getShot();
      }
    });
  }
  getShot(){
    if(this.gameShots.length == 0){
      console.log(this.shots);
      this.plotShots();
      return;
    }
    var shot = this.gameShots.pop();
    var shotHolder: any = [];
    this.shotServe.getShot(String(shot.Shot_ID)).subscribe(res=>{
      shotHolder = res;
      if(res){
        this.shots.push(shotHolder[0]);
        this.getShot();
      }
    });
  }
  plotShots(){
    var rink = document.getElementById('rink-img');
      console.log(rink?.offsetLeft);
      console.log(rink?.offsetTop);
      var rinkPositionX = parseInt(String(rink?.offsetLeft));
      var rinkPositionY = parseInt(String(rink?.offsetTop))
      for(let i = 0; i< this.shots.length;i++){
        var x = parseInt(String(this.shots[i].X_location))+rinkPositionX;
        var y = parseInt(String(this.shots[i].Y_location))+rinkPositionY;
        var xCoord = '';
        var yCoord = '';
        xCoord += x;
        yCoord+= y;
        xCoord += 'px';
        yCoord += 'px';
        const shotPoint = document.createElement("button");
        shotPoint.classList.add('dot');
        shotPoint.style.setProperty('--x', `${xCoord}`);
        shotPoint.style.setProperty('--y', `${yCoord}`);
        this.plottedShots.push(shotPoint);
        document.body.appendChild(shotPoint);
      }

  }
  @HostListener('window:popstate', ['$event'])
    onPopState(event: any) {

    console.log('Back button pressed');
    this.removeShots();
  }
  removeShots(){
    while(this.plottedShots.length>0){
      var shot = this.plottedShots.pop();
      document.body.removeChild(shot);
    }
  }
  routeNewGame(){
    this.coachAuth.routeNav('/game/'+this.team[0].Team_ID.toString()+'/'+this.team[0].Name.toString())
  }
  routeLeader(){
    console.log("Here");
    this.removeShots();
    this.playerAuth.routeNav('/leaderboard/'+this.team[0].Team_ID.toString()+'/'+this.team[0].Name)
  }

  routeProfile(){
    this.removeShots();
    if(this.playerAuth.signedIn){
      this.playerAuth.routeNav('playerprofile')
    }
    else if(this.coachAuth.signedIn){
      this.coachAuth.routeNav('coachprofile')
    }
    
  }

  routeHome(){
    this.removeShots();
    if(this.playerAuth.signedIn){
      this.playerAuth.routeNav('playerhome')
    }
    else if(this.coachAuth.signedIn){
      this.coachAuth.routeNav('coachhome')
    }
    
  }

  routeGameHub(){
    this.removeShots();
    this.playerAuth.routeNav('/gamehub/'+this.team[0].Team_ID.toString());
  }


}
