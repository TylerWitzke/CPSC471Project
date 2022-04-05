import { Component, OnInit } from '@angular/core';
import { PlayerAuthenticationService } from 'src/app/services/player-authentication.service';

import { Router, ActivatedRoute} from '@angular/router';
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
  router!: Router;

  constructor(private playerAuth: PlayerAuthenticationService) { }

  ngOnInit(): void {
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
        if(this.playerAuth.signedIn){
          console.log('fuck you');
          this.valid = true;
          document.getElementsByTagName('button')[0].click();
        }
        else{
          console.log('false you')
          this.fail = true;
          this.email = '';
          this.password = '';
        }
      }
    
  }

}
