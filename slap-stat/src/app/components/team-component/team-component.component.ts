import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.css']
})
export class TeamComponentComponent implements OnInit {
  team: any = {
    Name: '',
    League: '',
    Division: ''
  }

  retval: any = {}

  constructor(private tea: TeamService, private router:Router) { }

  ngOnInit(): void {
  }

  //This is what calls the api to register our team in the database
  registerTeam(){
    this.tea.addTeam(this.team).subscribe(data => {
      this.retval=data;
      alert("Your Team ID is "+this.retval.Team_ID+" Please Write this down!!!");
      if(data)
      {
        this.printStuff();
      }
    });
  }

  printStuff()
  {
    console.log("Print the data below");
    console.log(this.retval);
  }

  //Route back to the home of the database
  routeHome(){
    this.router.navigate(['/']);
  }

}
