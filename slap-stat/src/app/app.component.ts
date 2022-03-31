import { Component } from '@angular/core';

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
  first_name: string,
  last_name: string,
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'slap-stat';
}
