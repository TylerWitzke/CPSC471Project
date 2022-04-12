import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/app.component';
import { PersonnalService } from 'src/app/services/personnal.service';
import { PlayerAuthenticationService } from 'src/app/services/player-authentication.service';
import { PlayerService } from 'src/app/services/player.service';
import { SharedService } from 'src/app/services/shared.service';
import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {
  editMode: boolean = false;
  teamName: any;
  editToggleString: string = 'Edit Profile';
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
  editplayer: Player = {
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




  constructor(private auth: PlayerAuthenticationService, private team: TeamService, 
                private playser: PlayerService, private peronServ: PersonnalService, private route: Router,
                  public share: SharedService) { }

  ngOnInit(): void {
    this.auth.signIn('dillon.matthews@gmail.com','peepeepoopoo');
    this.player = this.auth.getProfile();

    this.team.getTeam(this.editplayer.team_id).subscribe(response =>{
      this.teamName = response[0].Name;
      if(response){
        console.log(this.teamName)
      }});

  }
  onEdit(){
    this.editMode = !this.editMode;
    if(this.editMode == true) this.editToggleString = "Cancel";
    else this.editToggleString = "Edit Profile";
  }

  //This is the function used to submit our edited profile
  editProfile(){
    var personnalUpdate: any = {
      Email: this.auth.player.email,
      Team_ID: this.auth.player.team_id,
      F_Name: this.editplayer.first_name,
      L_Name: this.editplayer.last_name,
      Password: this.editplayer.password
    }

    var playerUpdate: any = {
      Email: this.auth.player.email,
      Team_ID: this.auth.player.team_id,
      Height: this.editplayer.height,
      Weight: this.editplayer.weight,
      Handedness: this.auth.player.handness,
      Number: this.editplayer.number,
      Position: this.auth.player.position
    }

    if(personnalUpdate.F_Name == '') personnalUpdate.F_Name = this.auth.player.first_name;
    if(personnalUpdate.L_Name == '') personnalUpdate.L_Name = this.auth.player.last_name;
    if(personnalUpdate.Password == '') personnalUpdate.Password = this.auth.player.password;
    if(playerUpdate.Height == 0) playerUpdate.Height = this.auth.player.height;
    if(playerUpdate.Weight == 0) playerUpdate.Weight = this.auth.player.weight;
    if(playerUpdate.Number == 0) playerUpdate.Number = this.auth.player.number;



    console.log(personnalUpdate);
    console.log(playerUpdate);


    var pword = prompt("Please enter your password");

    if(pword == this.auth.player.password){

    this.peronServ.putPersonnal(personnalUpdate.Email, personnalUpdate).subscribe(res=>{
      alert(res.toString());
    }); 

    this.playser.putPlayer(playerUpdate.Email, playerUpdate).subscribe(res=>{
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

    if(pword == this.auth.player.password){

    this.peronServ.deletePersonnal(this.auth.player.email).subscribe(res=>{
      alert(res.toString());
    }); 
    this.share.loggedin = false;
    this.route.navigate(['/']);
  } else {
    alert("Incorrect Password");
  }
  }

  routeLeader(){
    this.auth.routeNav('/leaderboard/'+this.player.team_id.toString()+'/'+this.teamName)
  }

  routeHome(){
    this.auth.routeNav('playerhome')
  }

  routeGame(){
    this.auth.routeNav('/gamehub/'+this.player.team_id.toString());
  }
}
