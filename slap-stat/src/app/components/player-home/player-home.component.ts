import { Component, OnInit } from '@angular/core';
import { PlayerAuthenticationService } from 'src/app/services/player-authentication.service';
import { Player } from 'src/app/app.component';
import { Team } from 'src/app/app.component';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { TeamStatsService } from 'src/app/services/team-stats.service';
@Component({
  selector: 'app-player-home',
  templateUrl: './player-home.component.html',
  styleUrls: ['./player-home.component.css']
})
export class PlayerHomeComponent implements OnInit {
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
  team: Team = {
    team_id: 1,
    team_record: '',
    name: '',
    division: '',
    league: ''

  }
  team_stats = {
    wins: 0,
    losses: 0,
    shots: 0,
    shotsAgainst: 0,
    pims: 0
  }
  player_stats = {
    goals: 55,
    assists: 7,
    hits: 78,
    pims: 144,
    f_percentage: 22,
    shots: 300
  }
  teams: any = [];
  teamStats: any = [];

  constructor(private auth: PlayerAuthenticationService,private router:Router, private teamService: TeamService, private teamStatService: TeamStatsService) { }

  ngOnInit(): void {
    if(this.auth.signedIn){
      this.player = this.auth.getProfile();
    }
    else{
      
      this.router.navigate(['/'])
    }
    this.getTeam(this.player.team_id);

    

    
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
    let w = this.teamStats[0].Wins;
    let l = this.teamStats[0].Losses;
    let s = '';
    s+=w;
    s += ' - ';
    s += l;
    this.team.team_record = s;
    this.team_stats.wins = this.teamStats[0].Wins;
    this.team_stats.losses = this.teamStats[0].Losses;
    this.team_stats.pims = this.teamStats[0].PIMS;
    this.team_stats.shotsAgainst = this.teamStats[0].shotsAgainst;
    console.log(this.team_stats);
  }




}
