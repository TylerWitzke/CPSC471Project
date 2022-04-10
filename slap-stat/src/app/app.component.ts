import { Component } from '@angular/core';
import { share } from 'rxjs';
import { SharedService } from './services/shared.service';

export interface Player {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  height: number;
  weight: number;
  handness: string;
  number: number;
  position: string;
  team_id: number;
}
export interface Team{
  team_id: number,
  team_record: string,
  name: string,
  league: string,
  division: string
}
export interface Coach{
  team_id: number,
  email: string,
  password: string,
  first_name: string,
  last_name: string,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public share: SharedService) { }

  title: string = 'slap-stat';

  //Logs the user out
  logout(){
    this.share.loggedin = false;
  }


}
