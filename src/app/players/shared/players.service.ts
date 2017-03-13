import {Http, Response, Headers } from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import {Player} from './player.model'



@Injectable()
export class PlayersService {
    private playerUrl = 'http://88.121.16.195/Services/FcHagenthalService/api/players';

    constructor(private http: Http) {

    }

    getplayer(id: string): Observable<Player> {
        return this.http.get(this.playerUrl + "/" + id)
            .map(response => response.json())
            .catch(this.handleError);
    }

    getplayers(): Observable<Player[]> {

        return this.http.get(this.playerUrl)
            .map(response => response.json())
            .catch(this.handleError);
    }

    createplayer(player: Player): Observable<Player> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.playerUrl, JSON.stringify(player), { headers: headers })
            .map(response => response.json())
            .catch(this.handleError);
    }


    updateplayer(player: Player): Observable<Player> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put(this.playerUrl + "/" + player.id, JSON.stringify(player), { headers: headers })
            .map(response => response.json())
            .catch(this.handleError);
    }


    deleteplayer(id: string) {
        
        return this.http.delete(this.playerUrl + "/" + id)
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


