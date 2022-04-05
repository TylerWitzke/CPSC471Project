import { HighContrastModeDetector } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Player } from 'src/app/app.component';
import { PersonnalService } from 'src/app/services/personnal.service';
import { CoachService } from 'src/app/services/coach.service';


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

  personnalParam: any ={
    Email: '',
    Team_ID: 0,
    F_Name: '',
    L_Name: '',
    Password: ''
  }

  playerParam: any = {
    Email: '',
    Team_ID: 0,
    Height: 0,
    Weight: 0,
    Handedness: '',
    Number: 0,
    Position: ''
  }

  coachParam: any = {
    Email: '',
    Team_ID: ''
  }

  constructor(private pers: PersonnalService, private coach:CoachService ) { }

  



  ngOnInit(): void {
  }

  //This toggles whether its a player or a coach
  togglePlayer(event: MatRadioChange, isPlay: boolean)
  {
    this.player = isPlay;
  }

    //This is what will send the player to the destination
    registerPerson(){
      console.log(this.personnalParam); //Just for testing purposes

      //First register a personnal into database
      this.pers.addPersonnal(this.personnalParam).subscribe(res=>{
        alert(res.toString());
      });
      if(this.player){
        this.playerParam.Email = this.personnalParam.Email;
        this.playerParam.Team_ID = this.personnalParam.Team_ID;
        //***Call the Service Here */
      } else {
        this.coachParam.Email = this.personnalParam.Email;
        this.coachParam.Team_ID = this.personnalParam.Team_ID;
        //First register a personnal into database
      this.coach.addCoach(this.personnalParam).subscribe(res=>{
        alert(res.toString());
      });
      }
    }

    //This function will switch the position of the player based on and event
    switchPlayer(event: MatRadioChange)
    {
      this.playerParam.Position = event.value;
    }

    //This function will switch the handness of the player
    switchHandness(event: MatRadioChange)
    {
      this.playerParam.Handedness = event.value;
    }

    //Return the player function
    getPlayer() :boolean
    {
      return this.player;
    }



}
