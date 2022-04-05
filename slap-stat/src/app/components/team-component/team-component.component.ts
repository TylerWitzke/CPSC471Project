import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamStatsService } from 'src/app/services/team-stats.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.css']
})
export class TeamComponentComponent implements OnInit {
  team: any = {
    Name: '',
    League: '',
    Division: ''
  }

  teamStat: any = {
    Team_ID: 0,
    Wins: 0,
    Losses: 0,
    PIMS: 0,
    Shots: 0,
    Shots_against: 0
  }

  retval: any = {}

  constructor(private tea: TeamService, private router:Router, private teamstat: TeamStatsService) { }

  ngOnInit(): void {
  }

  //This is what calls the api to register our team in the database
  registerTeam(){
    this.tea.addTeam(this.team).subscribe(data => {
      this.retval=data;
      alert("Your Team ID is "+this.retval.Team_ID+" Please Write this down!!!");
      if(data)
      {
        this.registerTeamStats();
      }
    });
  }

  registerTeamStats()
  {
    this.teamStat.Team_ID = this.retval.Team_ID;
    this.teamstat.addTeamStats(this.teamStat).subscribe(data => {
      if(data)
      {
        this.routeHome();
      }
    });
  }

  //Route back to the home of the database
  routeHome(){
    this.router.navigate(['/']);
  }

}
