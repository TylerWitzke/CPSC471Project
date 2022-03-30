import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  mode: string = '';
  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  togglePlayerMode(){
    this.mode = 'Player';
  }
  toggleCoachMode(){
    this.mode = 'Coach';
  }
  
  login(){
    console.log('login code');
  }

}
