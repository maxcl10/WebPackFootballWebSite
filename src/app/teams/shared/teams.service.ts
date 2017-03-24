import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Team } from './team.model';
import { Player } from '../../players/shared/player.model';

@Injectable()
export class TeamsService {
    private teamsUrl = 'http://88.121.16.195/Services/FcHagenthalService/api/teams';
    private teamPlayersUrl = 'http://88.121.16.195/Services/FcHagenthalService/api/ns/teamplayer/';
    private devTeamPlayerUrl = 'http://localhost:2028/api/ns/teamplayer/';

    constructor(private http: Http) {
    }

    public getPlayers(teamId: string): Observable<Player[]> {
        return this.http.get(this.teamPlayersUrl + 'getplayers/' + teamId)
            .map((response) => response.json())
            .catch(this.handleError);
    }

    public getHomeTeams(): Observable<Team[]> {
        return this.http.get(this.teamPlayersUrl + 'getHomeTeams')
            .map((response) => response.json())
            .catch(this.handleError);
    }

    public getTeams(): Observable<Team[]> {

        return this.http.get(this.teamsUrl)
            .map((response) => response.json())
            .catch(this.handleError);
    }

   public  createTeam(team: Team): Observable<Team> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.teamsUrl, JSON.stringify(team), { headers })
            .map((response) => response.json())
            .catch(this.handleError);
    }

    public addPlayerInTeam(playerId: string, teamId: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.teamPlayersUrl + 'addPlayer/', '{playerId: ' + JSON.stringify(playerId) + ', teamId: ' + JSON.stringify(teamId) + '}', {  headers })
            .map((response) => response.json())
            .catch(this.handleError);
    }

    public removePlayerFromTeam(playerId: string, teamId: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.teamPlayersUrl + 'removePlayer/', '{playerId: ' + JSON.stringify(playerId) + ', teamId: ' + JSON.stringify(teamId) + '}', { headers })
            .map((response) => response.json())
            .catch(this.handleError);
    }
    // updateplayer(player: Player): Observable<Player> {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     return this.http.put(this.playerUrl + '/' + player.id, JSON.stringify(player), { headers: headers })
    //         .map(response => response.json())
    //         .catch(this.handleError);
    // }

    // deleteplayer(id: string) {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     return this.http.delete(this.playerUrl + '/' + id, { headers: headers })
    //         .map(response => response.json())
    //         .catch(this.handleError);
    // }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = error.message || error.statusText || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
