import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/app.component';
import { PlayerAuthenticationService } from 'src/app/services/player-authentication.service';
@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {
  editMode: boolean = false;
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
  constructor(private auth: PlayerAuthenticationService) { }

  ngOnInit(): void {
    this.auth.signIn('dillon.matthews@gmail.com','peepeepoopoo');
    this.player = this.auth.getProfile();
    this.editplayer.email = this.player.email;
    this.editplayer.first_name = this.player.first_name;
    this.editplayer.password = this.player.password;
    this.editplayer.last_name = this.player.last_name;
    this.editplayer.height = this.player.height;
    this.editplayer.weight = this.player.weight;
    this.editplayer.handness = this.player.handness;
    this.editplayer.number = this.player.number;
    this.editplayer.position = this.player.position;
    this.editplayer.team_id = this.player.team_id;

  }
  onEdit(){
    this.editMode = !this.editMode;
    if(this.editMode == true) this.editToggleString = "Cancel";
    else this.editToggleString = "Edit Profile";
  }
  editProfile(){
    this.player = this.editplayer;
  }
  onDelete(){

  }

}
