import { Injectable } from '@angular/core';
import { Coach } from '../app.component';
@Injectable({
  providedIn: 'root'
})
export class CoachAuthenticationService {
  coach: Coach = {
    team_id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }
  constructor() { }
  signIn(email: string, password: string): void{
    this.coach.team_id = 3;
    this.coach.first_name = "hue";
    this.coach.last_name = 'mungus';
    this.coach.email = "bruh@gmail.com"
    this.coach.password = 'password';
  }
  getProfile(): Coach{
    return this.coach;
  }
}
