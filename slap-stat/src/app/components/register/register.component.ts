import { HighContrastModeDetector } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Player } from 'src/app/app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  player: boolean = false;
  editPlayer: Player = {
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

  constructor() { }

  



  ngOnInit(): void {
  }

  //This toggles whether its a player or a coach
  togglePlayer(event: MatRadioChange, isPlay: boolean)
  {
    this.player = isPlay;
  }

    //This is what will send the player to the destination
    registerPerson(){
      console.log(this.editPlayer.first_name);
      console.log(this.editPlayer.last_name);
      console.log(this.editPlayer.email);
      console.log(this.editPlayer.password);
      console.log(this.editPlayer.height);
      console.log(this.editPlayer.weight);
      console.log(this.editPlayer.handness);
      console.log(this.editPlayer.number);
      console.log(this.editPlayer.position);
    }

    //This function will switch the position of the player based on and event
    switchPlayer(event: MatRadioChange)
    {
      this.editPlayer.position = event.value;
    }

    //This function will switch the handness of the player
    switchHandness(event: MatRadioChange)
    {
      this.editPlayer.handness = event.value;
    }

    //Return the player function
    getPlayer() :boolean
    {
      return this.player;
    }



}
