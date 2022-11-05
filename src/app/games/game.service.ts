import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IGame } from "./game";
import { catchError,map,tap} from 'rxjs/operators';


@Injectable({
  providedIn:'root'
})
export class GameService{
  private gameUrl= 'api/games/games.json';

constructor(private http:HttpClient){

}
    getGames():Observable<IGame[]>{

      return  this.http.get<IGame[]>(this.gameUrl).pipe(
        tap(data=> console.log('All',JSON.stringify(data))),
        catchError(this.handleError)
      );

    }
     // Get one product
  // Since we are working with a json file, we can only retrieve all products
  // So retrieve all products and then find the one we want using 'map'
  getProduct(id: number): Observable<IGame | undefined> {
    return this.getGames()
      .pipe(
        map((games: IGame[]) => games.find(g => g.gameId === id))
      );
  }

    private handleError(err: HttpErrorResponse): Observable<never> {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }

}
