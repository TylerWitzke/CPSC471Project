import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coach } from 'src/app/app.component';
import { CoachAuthenticationService } from 'src/app/services/coach-authentication.service';
import { PersonnalService } from 'src/app/services/personnal.service';
import { SharedService } from 'src/app/services/shared.service';
import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.css']
})
export class CoachProfileComponent implements OnInit {
  editMode: boolean = false;
  editToggleString: string = 'Edit Profile';
  team_name: any;
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

  constructor(private auth: CoachAuthenticationService, private personServ: PersonnalService,
                private share: SharedService, private route: Router, private team: TeamService) { }

  ngOnInit(): void {
    
    this.coach = this.auth.getProfile();

    this.team.getTeam(this.auth.coach.team_id).subscribe(res=>{
      console.log(res);
      this.team_name = res[0].Name;
    }); 

  }
  onEdit(){
    this.editMode = !this.editMode;
    if(this.editMode == true) this.editToggleString = "Cancel";
    else this.editToggleString = "Edit Profile";
  }
  editProfile(){
    var personnalUpdate: any = {
      Email: this.auth.coach.email,
      Team_ID: this.auth.coach.team_id,
      F_Name: this.editCoach.first_name,
      L_Name: this.editCoach.last_name,
      Password: this.editCoach.password
    }

    if(personnalUpdate.F_Name == '') personnalUpdate.F_Name = this.auth.coach.first_name;
    if(personnalUpdate.L_Name == '') personnalUpdate.L_Name = this.auth.coach.last_name;
    if(personnalUpdate.Password == '') personnalUpdate.Password = this.auth.coach.password;

    var pword = prompt("Please enter your password");

    if(pword == this.auth.coach.password){
    this.personServ.putPersonnal(personnalUpdate.Email, personnalUpdate).subscribe(res=>{
      alert(res.toString());
    }); 
    this.share.loggedin = false;
    this.route.navigate(['/']);
  } else {
    alert("Incorrect Password");
  }
  }
  onDelete(){
    var pword = prompt("Please enter your password");

    if(pword == this.auth.coach.password){

    this.personServ.deletePersonnal(this.auth.coach.email).subscribe(res=>{
      alert(res.toString());
    }); 
    this.share.loggedin = false;
    this.route.navigate(['/']);
  } else {
    alert("Incorrect Password");
  }
  }

  routeLeader(){
    this.auth.routeNav('/leaderboard/'+this.coach.team_id.toString()+'/'+this.team_name)
  }
  routeGame(){
    this.auth.routeNav('/game/'+this.coach.team_id.toString()+'/'+this.team_name)
  }

  routeGameHub(){
    this.auth.routeNav('/gamehub/'+this.coach.team_id.toString());
  }
  
  routeHome(){
    this.auth.routeNav('/coachhome/')
  }

}
