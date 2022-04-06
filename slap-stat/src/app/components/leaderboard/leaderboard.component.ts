import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonnalService } from 'src/app/services/personnal.service';
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



const ELEMENT_DATA: PeriodicElement[] = [
  {number: 1, name: 'D.Reagan', goals: 0, assists: 0, shots: 3, hits: 4, faceoff: 46},
  {number: 2, name: 'D.Anhorn', goals: 0, assists: 2, shots: 3, hits: 4, faceoff: 46},
  {number: 3, name: 'E.St James', goals:3, assists: 1, shots: 3, hits: 4, faceoff: 46},
  {number: 8, name: 'D.Matthews', goals: 2, assists: 1, shots: 3, hits: 4, faceoff: 46},
  {number: 9, name: 'T.Witzke', goals: 3, assists: 3, shots: 3, hits: 4, faceoff: 46},
  {number: 12, name: 'J.Iginla', goals: 0, assists: 3, shots: 3, hits: 4, faceoff: 46},
  {number: 24, name: 'D.Smith', goals: 1, assists: 2, shots: 3, hits: 4, faceoff: 46},
  {number: 36, name: 'E.Kane', goals: 0, assists: 1, shots: 3, hits: 4, faceoff: 46},
  {number: 45, name: 'R.Reaves', goals: 0, assists: 1, shots: 3, hits: 4, faceoff: 46},
  {number: 88, name: 'S.Monoghan', goals: 0, assists: 0, shots: 3, hits: 8, faceoff: 28},
];



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
                  private person: PersonnalService) { }

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
        faceoff: this.playerList[i].Assists
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

}
