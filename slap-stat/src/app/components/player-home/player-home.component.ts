import { Component, OnInit } from '@angular/core';
import { PlayerAuthenticationService } from 'src/app/services/player-authentication.service';
import { Player } from 'src/app/app.component';
import { Team } from 'src/app/app.component';
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
    name: 'Dixon Ciders',
    division: 'south cali',
    league: 'California state beer league'

  }
  player_stats = {
    goals: 55,
    assists: 7,
    hits: 78,
    pims: 144,
    f_percentage: 22,
    shots: 300
  }

  constructor(private auth: PlayerAuthenticationService) { }

  ngOnInit(): void {
    this.auth.signIn('dillon.matthews@gmail.com','peepeepoopoo');
    this.player = this.auth.getProfile();
  }


}
