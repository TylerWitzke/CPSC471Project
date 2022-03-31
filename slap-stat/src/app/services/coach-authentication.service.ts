import { Injectable } from '@angular/core';
import { Coach } from '../app.component';
@Injectable({
  providedIn: 'root'
})
export class CoachAuthenticationService {
  coach: Coach = {
    team_id: 0,
    first_name: '',
    last_name: ''
  }
  constructor() { }
  signIn(email: string, password: string): void{
    this.coach.team_id = 3;
    this.coach.first_name = "hue";
    this.coach.last_name = 'mungus';
  }
  getProfile(): Coach{
    return this.coach;
  }
}
