import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coach } from 'src/app/app.component';
import { Team } from 'src/app/app.component';
import { CoachAuthenticationService } from 'src/app/services/coach-authentication.service';
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
  constructor(private auth: CoachAuthenticationService, private router: Router) { }

  ngOnInit(): void {
    if(this.auth.signedIn){
      this.coach = this.auth.getProfile();
    }
    else{
      this.router.navigate(['/']);
    }

  }
  

}
