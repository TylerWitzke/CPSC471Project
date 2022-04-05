import { HighContrastModeDetector } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Player } from 'src/app/app.component';
import { PersonnalService } from 'src/app/services/personnal.service';
import { CoachService } from 'src/app/services/coach.service';
import { PlayerService } from 'src/app/services/player.service';
import { PlayerStatsService } from 'src/app/services/player-stats.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  player: boolean = false;


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

  playerStats: any = {
    Email: '',
    Team_ID:'',
    GamesPlayed: 0,
    Goals: 0,
    Assists: 0,
    Shots: 0,
    Hits: 0,
    F_wins: 0,
    F_losses: 0
  }

  coachParam: any = {
    Email: '',
    Team_ID: ''
  }

  constructor(private pers: PersonnalService, private coach:CoachService, private play:PlayerService,
                    private stat:PlayerStatsService, private router:Router ) { }

  



  ngOnInit(): void {
  }

  //This toggles whether its a player or a coach
  togglePlayer(event: MatRadioChange, isPlay: boolean)
  {
    this.player = isPlay;
  }

    //This will register a person in the database
    registerPerson(){
      //First register a personnal into database
      this.pers.addPersonnal(this.personnalParam).subscribe(res=>{
        alert(res.toString());
        if(res){
            this.uploadOther(res.toString().includes('Failed'));
        }
      });

    }

    //Upload either a coach or a player depending on result
    uploadOther(inDatabase: boolean){
      console.log(inDatabase);
      if(inDatabase) return;

      //If player, add player
      if(this.player){
        this.playerParam.Email = this.personnalParam.Email;
        this.playerParam.Team_ID = this.personnalParam.Team_ID;
        this.play.addPlayer(this.playerParam).subscribe(res=>{
          if(res){
            this.uploadPlayerStats();
          }
        });
      } else { //Else register coach
        this.coachParam.Email = this.personnalParam.Email;
        this.coachParam.Team_ID = this.personnalParam.Team_ID;
        //First register a personnal into database
        this.coach.addCoach(this.coachParam).subscribe(res=>{
        if(res){
          this.routeToHome();
        }
      });
      }
    }

    //Create a stats sheet for a player
    uploadPlayerStats()
    {
      this.playerStats.Email = this.personnalParam.Email;
      this.playerStats.Team_ID = this.personnalParam.Team_ID;
      this.stat.addPlayer_Stat(this.playerStats).subscribe(res=>{
        if(res){
          this.routeToHome();
        }
      });
    }

    //Route back to the home screen
    routeToHome(){
      this.router.navigate(['/']);
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
