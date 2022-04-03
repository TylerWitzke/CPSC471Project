import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/app/app.component';
import { CoachAuthenticationService } from 'src/app/services/coach-authentication.service';
@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.css']
})
export class CoachProfileComponent implements OnInit {
  editMode: boolean = false;
  editToggleString: string = 'Edit Profile';
  coach: Coach = {
    team_id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }
  editCoach: Coach = {
    team_id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  constructor(private auth: CoachAuthenticationService) { }

  ngOnInit(): void {
    this.auth.signIn('joe@gmail.com','password');
    this.coach = this.auth.getProfile();
    this.editCoach.email = this.coach.email;
    this.editCoach.password = this.coach.password;
    this.editCoach.first_name = this.coach.first_name;
    this.editCoach.last_name = this.coach.last_name;
    this.editCoach.team_id = this.coach.team_id;


  }
  onEdit(){
    this.editMode = !this.editMode;
    if(this.editMode == true) this.editToggleString = "Cancel";
    else this.editToggleString = "Edit Profile";
  }
  editProfile(){
    this.coach = this.editCoach;
  }
  onDelete(){

  }

}
