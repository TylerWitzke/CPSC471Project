import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { PlayerAuthenticationService } from 'src/app/services/player-authentication.service';
import { CoachAuthenticationService } from 'src/app/services/coach-authentication.service';
export interface PeriodicElement {
  name: string;
  number: number;
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
  dataSource = ELEMENT_DATA;
  teamID: number = 0;
  playerList: any = []
  constructor(private player: PlayerService, private coachauth: CoachAuthenticationService,
                private playauth: PlayerAuthenticationService) { }

  ngOnInit(): void {
    if(this.playauth.signedIn){
      this.teamID = this.playauth.player.team_id;
    } else {
      this.teamID = this.coachauth.coach.team_id;
    }

    this.player.getAllPlayer(this.teamID).subscribe(res=>{
      
    });
  }

}
