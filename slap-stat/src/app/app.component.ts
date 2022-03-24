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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'slap-stat';
}
