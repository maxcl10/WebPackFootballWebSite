import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Game } from './game.model'



@Injectable()
export class GamesService {
    private gameUrl = 'http://88.121.16.195/Services/FcHagenthalService/api/games/';       
    private nextGameUrl = 'http://88.121.16.195/Services/FcHagenthalService/api/nextgame/';
    private lastGameUrl = 'http://88.121.16.195/Services/FcHagenthalService/api/previousgame/';

    constructor(private http: Http) {

    }

   public getGame(id: string): Observable<Game> {
        return this.http.get(this.gameUrl + "/" + id)
            .map((response) => response.json())
            .catch(this.handleError);
    }

  public  getGames(): Observable<Game[]> {

        return this.http.get(this.gameUrl)
            .map((response) => response.json())
            .catch(this.handleError);
    }

   public getNextGame(): Observable<Game> {
        return this.http.get(this.nextGameUrl)
            .map((response) => response.json())
            .catch(this.handleError);
    }

  public  getLastGame(): Observable<Game> {
        return this.http.get(this.lastGameUrl)
            .map((response) => response.json())
            .catch(this.handleError);
    }

  public  createGame(Game: Game): Observable<Game> {                  
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.gameUrl, JSON.stringify(Game), { headers: headers })
            .map((response) => response.json())
            .catch(this.handleError);
    }


   public updateGame(Game: Game): Observable<Game> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put(this.gameUrl + "/" + Game.Id, JSON.stringify(Game), { headers: headers })
            .map((response) => response.json())
            .catch(this.handleError);
    }


   public deleteGame(id: string) {
      
        return this.http.delete(this.gameUrl + "/" + id)
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = error.message || error.statusText || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}


