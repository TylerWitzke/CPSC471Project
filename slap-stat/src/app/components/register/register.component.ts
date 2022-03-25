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
  position: ''
  }

  constructor() { }

  



  ngOnInit(): void {
  }
  //This toggles the boolean for player
  togglePlayerTrue(){
    this.player = true;
  }

    //This toggles the boolean for player
    togglePlayerFalse(){
      this.player = false;
    }

    //This is what will send the player to the destination
    registerPerson(){
      console.log(this.editPlayer.position);
    }

    //This function will switch the position of the player based on and event
    switchPlayer(event: MatRadioChange)
    {
      this.editPlayer.position = event.value;
    }

    //Return the player function
    getPlayer() :boolean
    {
      console.log("This worked to");
      return this.player;
    }



}
