import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  player: boolean = false;
  constructor() { }

  



  ngOnInit(): void {
  }
  //This toggles the boolean for player
  togglePlayer(){
    this.player = !this.player;
  }

    //Return the player function
    getPlayer() :boolean
    {
      console.log("This worked to");
    return this.player;
    }

}
