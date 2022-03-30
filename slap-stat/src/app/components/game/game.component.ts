import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  number: number;
  goals: number;
  assists: number;
  shots: number;
  hits: number;
  faceoff: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {number: 1, name: 'D.Reagan', goals: 0, assists: 0, shots: 3, hits: 4, faceoff: 46},
  {number: 2, name: 'D.Anhorn', goals: 0, assists: 2, shots: 3, hits: 4, faceoff: 46},
  {number: 3, name: 'E.St James', goals:3, assists: 1, shots: 3, hits: 4, faceoff: 46},
  {number: 8, name: 'D.Matthews', goals: 2, assists: 1, shots: 3, hits: 4, faceoff: 46},
  {number: 9, name: 'T.Witzke', goals: 3, assists: 3, shots: 3, hits: 4, faceoff: 46},
  {number: 12, name: 'J.Iginla', goals: 0, assists: 3, shots: 3, hits: 4, faceoff: 46},
  {number: 24, name: 'D.Smith', goals: 1, assists: 2, shots: 3, hits: 4, faceoff: 46},
  {number: 36, name: 'E.Kane', goals: 0, assists: 1, shots: 3, hits: 4, faceoff: 46},
  {number: 45, name: 'R.Reaves', goals: 0, assists: 1, shots: 3, hits: 4, faceoff: 46},
  {number: 88, name: 'S.Monoghan', goals: 0, assists: 0, shots: 3, hits: 8, faceoff: 28},
];


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'goals', 'assists', 'shots', 'hits', 'faceoff'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  

  //This grabs the coordinate when the picture is clicked 
  getCoord(event : any){
    var x = event.clientX;
    var y = event.clientY;
    console.log(x);
    console.log(y);
 }


}
