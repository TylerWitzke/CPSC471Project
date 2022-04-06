import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  number: number;
  goals: number;
  assists: number;
  shots: number;
  hits: number;
  faceoff_win: number;
  faceoff_loss: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {number: 1, name: 'D.Reagan', goals: 0, assists: 0, shots: 3, hits: 4, faceoff_win: 46, faceoff_loss: 23},
  {number: 2, name: 'D.Anhorn', goals: 0, assists: 2, shots: 3, hits: 4, faceoff_win: 46, faceoff_loss: 23},
  {number: 3, name: 'E.St James', goals:3, assists: 1, shots: 3, hits: 4, faceoff_win: 46, faceoff_loss: 23},
  {number: 8, name: 'D.Matthews', goals: 2, assists: 1, shots: 3, hits: 4, faceoff_win: 46, faceoff_loss: 23},
  {number: 9, name: 'T.Witzke', goals: 3, assists: 3, shots: 3, hits: 4, faceoff_win: 46, faceoff_loss: 23},
  {number: 12, name: 'J.Iginla', goals: 0, assists: 3, shots: 3, hits: 4, faceoff_win: 46, faceoff_loss: 23},
  {number: 24, name: 'D.Smith', goals: 1, assists: 2, shots: 3, hits: 4, faceoff_win: 46, faceoff_loss: 23},
  {number: 36, name: 'E.Kane', goals: 0, assists: 1, shots: 3, hits: 4, faceoff_win: 46, faceoff_loss: 23},
  {number: 45, name: 'R.Reaves', goals: 0, assists: 1, shots: 3, hits: 4, faceoff_win: 46, faceoff_loss: 23},
  {number: 88, name: 'S.Monoghan', goals: 0, assists: 0, shots: 3, hits: 8, faceoff_win: 28, faceoff_loss: 23},
];


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'goals', 'assists', 'shots', 'hits', 'faceoff_win', 'faceoff_loss'];
  dataSource = ELEMENT_DATA;
  goalInput : boolean =  false;
  goalNumber : string = '';
  assist1Number: string = '';
  assist2Number: string = '';
  goalCancelToggle: string = 'Add Goal';



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

 printHits(item: any){
   item.goals+=1;
   console.log(item.goals);
 }
 onGoal(){
   this.goalInput = !this.goalInput;
   if(this.goalInput){
     this.goalCancelToggle = 'Cancel';
   }
   else{
     this.goalCancelToggle = 'Add Goal'
   }
 }
 submitGoal(){
   let g = parseInt(this.goalNumber);
   let a1 = parseInt(this.assist1Number);
   let a2 = parseInt(this.assist2Number);
   for(let i = 0;i<this.dataSource.length;i++){
    if(g == this.dataSource[i].number){
      this.dataSource[i].goals++;
    }
   }
   for(let i = 0;i<this.dataSource.length;i++){
    if(a1 == this.dataSource[i].number){
      this.dataSource[i].assists++;
    }
   }
   for(let i = 0;i<this.dataSource.length;i++){
    if(a2 == this.dataSource[i].number){
      this.dataSource[i].assists++;
    }
   }
   this.goalInput = false;
   this.goalCancelToggle = 'Add Goal';
   this.assist1Number = '';
   this.assist2Number = '';
   this.goalNumber = '';
 }
 

}
