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
    team_record: '24-9-3',
    name: '',
    division: '',
    league: ''

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
        this.populateTeam();
      }});
  }
  populateTeam(){
    this.team.name = this.teams[0].Name;
    this.team.league = this.teams[0].League;
    this.team.division = this.teams[0].Division;
  }




}
