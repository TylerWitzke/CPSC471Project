import { Component, OnInit } from '@angular/core';
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

  constructor(private tea: TeamService) { }

  ngOnInit(): void {
  }

  registerTeam(){
    this.tea.addTeam(this.team).subscribe(data => {
      this.retval=data;
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

}
