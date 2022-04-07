import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { ActivatedRoute } from '@angular/router';
import { PersonnalService } from 'src/app/services/personnal.service';
import { GameService } from 'src/app/services/game.service';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { GameSheetService } from 'src/app/services/game-sheet.service';
import { TeamStatsService } from 'src/app/services/team-stats.service';
import { PlayerStatsService } from 'src/app/services/player-stats.service';
import { CoachAuthenticationService } from 'src/app/services/coach-authentication.service';
export interface PeriodicElement {
  name: string;
  number: number;
  goals: number;
  assists: number;
  shots: number;
  hits: number;
  faceoff_win: number;
  faceoff_loss: number;
  email: string;
  teamN: string;
  
}
export interface PlayersInfo {
  
  number: number;
  name: string;
  email: string;
  
}

var ELEMENT_DATA: PeriodicElement[] = [
  
];


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'goals', 'assists', 'shots', 'hits', 'faceoff_win', 'faceoff_loss'];
  dataSource = ELEMENT_DATA;
   i:number = -1;
  goalInput : boolean =  false;
  goalNumber : string = '';
  assist1Number: string = '';
  assist2Number: string = '';
  goalCancelToggle: string = 'Add Goal';
  players: any = [];
  personnalList: any = [];
  combined: PlayersInfo[] = [];
  returnGame: any =[];
  returnPlayer: any =[];
  teamID: any;
  teamName: any = '';
  oppName: string = '';
  tScore: number = 0;
  oScore: number = 0;
  gameId: string = '';
  minorStats: any = {
    shots: 0,
    hits: 0,
    fWins: 0,
    fLoss: 0
  }
  constructor(private playerServ: PlayerService, private activatedRoute: ActivatedRoute,
     private personServ: PersonnalService, private gameServ: GameService, private sheetServe: GameSheetService,
      private tStat: TeamStatsService, private pStat: PlayerStatsService, private auth: CoachAuthenticationService) { }

  ngOnInit(): void {
    ELEMENT_DATA = [];
    console.log(this.dataSource);
    this.teamName = this.activatedRoute.snapshot.paramMap.get('teamname');
    this.teamID = this.activatedRoute.snapshot.paramMap.get('id');
    this.grabPlayers();
  }
  grabPlayers(){
    this.playerServ.getAllPlayers(this.teamID).subscribe(res=>{
      this.players = res;
      if(res){
        this.grabPersonnal()
      }
    });
  }
  grabPersonnal(){
    this.personServ.getAllPersonnal(this.teamID).subscribe(res=>{
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
    for (var i = 0; i < this.players.length; i++){

      var temp: PlayersInfo = {
        
        number: this.players[i].Number,
        name: this.players[i].Email,
        email: this.players[i].Email
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
    console.log(this.combined);
    this.popList();
  }
  popList(){
    for(let i = 0; i<this.combined.length;i++){
      var element: PeriodicElement = {number: this.combined[i].number, name: this.combined[i].name, goals: 0, assists: 0, shots: 0, hits: 0, faceoff_win: 0, faceoff_loss: 0, email: this.combined[i].email, teamN: this.teamName};
      this.dataSource.push(element);
    }
  }
  //This grabs the coordinate when the picture is clicked 
  getCoord(event : any){
    var x = event.clientX;
    var y = event.clientY;
    console.log(x);
    console.log(y);
 }

 printHits(item: any){
   item.hits+=1;
   
 }
 incrOppScore(){
   this.oScore++;
 }
 addFWin(item: any){
   item.faceoff_win++;
 }
 addFLoss(item: any){
  item.faceoff_loss++;
}

 onGoal(){
   this.goalInput = !this.goalInput;
   if(this.goalInput){
     this.goalCancelToggle = 'Cancel';
   }
   else{
     this.goalCancelToggle = 'Add Goal'
   }
 }
 submitGoal(){
   let g = parseInt(this.goalNumber);
   let a1 = parseInt(this.assist1Number);
   let a2 = parseInt(this.assist2Number);
   for(let i = 0;i<this.dataSource.length;i++){
    if(g == this.dataSource[i].number){
      this.dataSource[i].goals++;
    }
   }
   for(let i = 0;i<this.dataSource.length;i++){
    if(a1 == this.dataSource[i].number){
      this.dataSource[i].assists++;
    }
   }
   for(let i = 0;i<this.dataSource.length;i++){
    if(a2 == this.dataSource[i].number){
      this.dataSource[i].assists++;
    }
   }
   this.goalInput = false;
   this.goalCancelToggle = 'Add Goal';
   this.assist1Number = '';
   this.assist2Number = '';
   this.goalNumber = '';
   this.tScore++;
 }
 submitGame(){
  var date = new Date();
  var s = date.toISOString().substring(0,10);
 
   var game: any = {
     Team_ID: this.teamID,
     HomeAway: 'H',
     Opponent: this.oppName,
     Date: s
   }
   this.gameServ.addGame(game).subscribe(response =>{this.returnGame = response;
    if(response){
      this.submitGameStats();
    }});
 }
  submitGameStats(){
    
    for(let i = 0;i<this.dataSource.length;i++){
      this.minorStats.shots += this.dataSource[i].shots;
      this.minorStats.hits += this.dataSource[i].hits;
      this.minorStats.fWins += this.dataSource[i].faceoff_win;
      this.minorStats.fLoss += this.dataSource[i].faceoff_loss;
    }
    console.log(this.returnGame.Game_ID);
    var gameSheet: any = {
      Game_ID: this.returnGame.Game_ID,
      Team_score: this.tScore,
      Opponent_score: this.oScore,
      Team_shots: this.minorStats.shots,
      Opponent_shots: 25,
      Team_hits: this.minorStats.hits,
      F_wins: this.minorStats.fWins,
      F_losses: this.minorStats.fLoss
    }
    this.sheetServe.addGame_Sheet(gameSheet).subscribe(res=>{
      alert(res.toString());
      if(res){
          this.updateTeamStats();
      }
    });

  }
  updateTeamStats(){
    var teamStats: any = {
      Team_ID: this.teamID,
      Wins: 56,
      Losses: 1,
      PIMS: 0,
      Shots: this.minorStats.shots,
      Shots_against: 25
    }
    if(this.tScore>=this.oScore){
      teamStats.Wins = 1;
      teamStats.Losses = 0;
    }
    else{
      teamStats.Wins = 0;
      teamStats.Losses = 1;
    }
    console.log(teamStats);
    this.tStat.putTeamStats(this.teamID,teamStats).subscribe(res=>{
      alert(res.toString());
      if(res){
          this.updatePlayers();
      }
    });
  }
  updatePlayers(){
      this.i++;
      console.log(this.returnPlayer);
      if(this.i>=this.dataSource.length){
        this.auth.routeNav('coachhome');
        return;
      }
      
      console.log(this.dataSource[this.i].email);
      var playerStat: any = {
        Email: this.dataSource[this.i].email,
        Team_ID: this.teamID,
        GamesPlayed: 1,
        Goals: this.dataSource[this.i].goals,
        Assists: this.dataSource[this.i].assists,
        Shots: this.dataSource[this.i].shots,
        Hits: this.dataSource[this.i].hits,
        F_wins: this.dataSource[this.i].faceoff_win,
        F_losses: this.dataSource[this.i].faceoff_loss
      }
      this.pStat.putPlayer_Stat(this.dataSource[this.i].email, playerStat).subscribe(response =>{this.returnPlayer = response;
        if(response){
          this.updatePlayers();
        }});
    
    this.auth.routeNav('coachhome');
  }
  
 

}
