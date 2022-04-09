import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coach } from 'src/app/app.component';
import { Team } from 'src/app/app.component';
import { CoachAuthenticationService } from 'src/app/services/coach-authentication.service';
import { TeamStatsService } from 'src/app/services/team-stats.service';
import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-coach-home',
  templateUrl: './coach-home.component.html',
  styleUrls: ['./coach-home.component.css']
})
export class CoachHomeComponent implements OnInit {
  coach: Coach = {
    team_id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }
  team: Team = {
    team_id: 1,
    team_record: '24-9-3',
    name: 'Dixon Ciders',
    division: 'south cali',
    league: 'California state beer league'

  }
  team_stats = {
    wins: 0,
    losses: 0,
    shots: 0,
    shotsAgainst: 0,
    pims: 0
  }
  teams: any = [];
  teamStats: any = [];
  constructor(private auth: CoachAuthenticationService, private router: Router, private teamService: TeamService, private teamStatService: TeamStatsService) { }

  ngOnInit(): void {
    if(this.auth.signedIn){
      this.coach = this.auth.getProfile();
    }
    else{
      this.router.navigate(['/']);
    }
    this.getTeam(this.coach.team_id)
  }
  getTeam(id: number){
    this.team.team_id = id;
    this.teamService.getTeam(id).subscribe(response =>{this.teams = response;
      if(response){
        this.getTeamStats(id);
      }});
  }
  getTeamStats(id: number){
    
    this.teamStatService.getTeamStats(id).subscribe(response =>{this.teamStats = response;
      if(response){
        this.populateTeam();
      }});
  }
  populateTeam(){ 
    this.team.name = this.teams[0].Name;
    this.team.league = this.teams[0].League;
    this.team.division = this.teams[0].Division;
    let w = String(this.teamStats[0].Wins);
    let l = String(this.teamStats[0].Losses);
    let s = '';
    s+=w;
    s += ' - ';
    s += l;
    this.team.team_record = s;
    this.team_stats.wins = this.teamStats[0].Wins;
    this.team_stats.losses = this.teamStats[0].Losses;
    this.team_stats.pims = this.teamStats[0].PIMS;
    this.team_stats.shotsAgainst = this.teamStats[0].Shots_against;
    console.log(this.team_stats);
  }
  routeLeader(){
    console.log("Here");
    //this.router.navigate(['/leaderboard/'+this.team.team_id.toString()+'/'+this.team.name]);
    this.auth.routeNav('/leaderboard/'+this.team.team_id.toString()+'/'+this.team.name)
  }
  routeGame(){
    this.auth.routeNav('/game/'+this.team.team_id.toString()+'/'+this.team.name)
  }

}
