import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IGame } from "./game";
import { GameService } from "./game.service";


@Component({
  templateUrl:'./game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnDestroy{
  pageTitle:string='Games List';
  imageWidth:number =100;
  imageMargin:number =2;
  showImage:boolean =false;
  errorMessage:string='';
  sub! : Subscription;

  private _listFilter:string='';

  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    // console.log('In setter: ',value);
    this.filteredGames=this.performFilter(value);

  }

  filteredGames:IGame[]= [];

  games: IGame[]=[];

  constructor(private gameService:GameService){}

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }

  performFilter(filterBy:string):IGame[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.games.filter(
      (game:IGame) => game.gameName.toLocaleLowerCase().includes(filterBy)
    );
  }

  toggleImage():void{
    this.showImage =!this.showImage;
  };

  ngOnInit():void{
    this.gameService.getGames().subscribe({
      next: games=>{
        this.games=games;
        this.filteredGames=this.games;
      },
      error:err => this.errorMessage=err
    });
  }
  onRatingClicked(message: string):void{
    this.pageTitle='Games List: ' + message;
  }
}
