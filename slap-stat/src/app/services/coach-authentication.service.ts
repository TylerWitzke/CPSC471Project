import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Coach } from '../app.component';
import { CoachService} from './coach.service';
import { PersonnalService } from './personnal.service';
@Injectable({
  providedIn: 'root'
})
export class CoachAuthenticationService {
  signedIn: boolean = false;
  tempPassword: string = '';
  coach: Coach = {
    team_id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }
  coaches:any = []
  personnals:any = []
  constructor(private router: Router, private coachService: CoachService, private personnalService: PersonnalService) { }
  signIn(email: string, password: string): void{
    this.tempPassword = password;
    
    this.getCoach(email);
  }
  getProfile(): Coach{
    return this.coach;
  }
  signOut(){
    this.signedIn = false;
    this.coaches = [];
    this.personnals = [];
    this.router.navigate(['/']);
    
  }
  getCoach(email:string){
    this.coachService.getCoach(email).subscribe(response =>{this.coaches = response;
    if(response){
      this.getPersonnal(email);
    }});
    
  }
  getPersonnal(email:string){
    this.personnalService.getPersonnal(email).subscribe(response =>{this.personnals = response;
    if(response){
      this.populateCoach();
    }}); 
  }
  populateCoach(){
    if(this.personnals.length == 0){
      console.log('zero inside');
      return;
    }
    if(this.tempPassword != this.personnals[0].Password){
      console.log('wrong password');
      return;
    }
    this.coach.email = this.personnals[0].Email;
    this.coach.password = this.personnals[0].Password;
    this.coach.team_id = this.personnals[0].Team_ID;
    this.coach.first_name = this.personnals[0].F_Name;
    this.coach.last_name = this.personnals[0].L_Name;
    this.signedIn = true;
    this.router.navigate(['/coachhome']);

  }
  routeNav(link: string){
    this.router.navigate(['/'+link]);
  }

  
}
