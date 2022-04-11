import { Component, OnInit } from '@angular/core';
import { PlayerAuthenticationService } from 'src/app/services/player-authentication.service';

import { Router, ActivatedRoute} from '@angular/router';
import { CoachAuthenticationService } from 'src/app/services/coach-authentication.service';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  valid: boolean = false;
  fail: boolean = false;
  mode: string = '';
  email: string = '';
  password: string = '';
  

  constructor(private playerAuth: PlayerAuthenticationService, private coachAuth: CoachAuthenticationService) { }

  ngOnInit(): void {
    this.playerAuth.signedIn = false;
    this.coachAuth.signedIn = false;
  }
  togglePlayerMode(){
    this.mode = 'Player';
  }
  toggleCoachMode(){
    this.mode = 'Coach';
  }
  
  login(){
    
      if(this.mode === 'Player'){
        this.playerAuth.signIn(this.email,this.password);
        console.log('false you')
        this.fail = true;
        this.email = '';
        this.password = '';
        
      }
      else{
        console.log('login else');
        this.coachAuth.signIn(this.email,this.password);
        this.fail = true;
        this.email = '';
        this.password = '';
      }
    
  }

}
