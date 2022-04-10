import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { TeamService } from 'src/app/services/team.service';


export interface PeriodicElement {
  teamname: string,
  opponentname: string;
  wlt: string;
  goalsfor: number;
  goalsagainst: number;
  teamshots: number;
  opponentshots: number;
  hits: number;
  faceoff: number;
}



@Component({
  selector: 'app-gamehub',
  templateUrl: './gamehub.component.html',
  styleUrls: ['./gamehub.component.css']
})
export class GamehubComponent implements OnInit {
  displayedColumns: string[] = ['opponentname', 'wlt', 'goalsfor', 'goalsagainst', 'teamshots',
                                  'opponentshots', 'hits', 'faceoff'];
  teamID: any;
  allGames: any;
  gameSheets: any = [];
  gameHub: PeriodicElement[] = [];
  teamname: any;

  constructor(private activatedRoute: ActivatedRoute, private gameserv: GameService, private teamserv: TeamService) { }

  ngOnInit(): void {
    this.teamID = this.activatedRoute.snapshot.paramMap.get('teamid');

    //Get players stats
    this.gameserv.getAllGame(this.teamID).subscribe(res=>{
      this.allGames = res;
      if(res){
        console.log(this.allGames)
        this.grabGameSheets();
      }
    });

    this.teamserv.getTeam(this.teamID).subscribe(res=>{
      this.teamname = res[0].Name;
    });

  }

  grabGameSheets(){
    for(var i = 0; i < this.allGames.length; i++){
      this.gameserv.getGameSheet(this.allGames[i].Game_ID).subscribe(res=>{
        this.gameSheets.push(res[0]);
        if(res && this.gameSheets.length == this.allGames.length){
          console.log(this.gameSheets)
          this.populateGameHub();
        }
      });
    }
  }

  populateGameHub(){
    for(var i = 0; i < this.allGames.length; i++){
      var temp: PeriodicElement = {
        teamname: this.teamname,
        opponentname: this.allGames[i].Opponent,
        wlt: '',
        goalsfor: this.gameSheets[i].Team_score,
        goalsagainst: this.gameSheets[i].Opponent_score,
        teamshots: this.gameSheets[i].Team_shots,
        opponentshots: this.gameSheets[i].Opponent_shots,
        hits: this.gameSheets[i].Team_hits,
        faceoff: Math.trunc(100*parseInt(String(this.gameSheets[i].F_wins))/(parseInt(String(this.gameSheets[i].F_wins))+parseInt(String(this.gameSheets[i].F_losses)))) 
       }

       if(temp.goalsfor > temp.goalsagainst) temp.wlt = "Win";
       else if(temp.goalsagainst > temp.goalsfor) temp.wlt = "Loss";
       else temp.wlt = "Tie";

       this.gameHub.push(temp);
    }
  }



}
