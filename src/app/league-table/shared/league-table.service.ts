import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Ranking } from './league-table.model';

@Injectable()
export class LeagueRankingsService {
    private rankingUrl = 'http://88.121.16.195/Services/FcHagenthalService/api/ranking';
    private updateLafaRankingUrl = 'http://88.121.16.195/Services/FcHagenthalService/UpdateRankingFromLafa';

    constructor(private http: Http) {

    }

    // getranking(id: string): Observable<Ranking> {
    //     return this.http.get(this.rankingUrl + "/" + id)
    //         .map(response => response.json())
    //         .catch(this.handleError);
    // }

    public getRankings(): Observable<Ranking[]> {
        return this.http.get(this.rankingUrl)
            .map((response) => response.json())
            .catch(this.handleError);
    }

    public updateRankingFromLafa() {
        return this.http.get(this.updateLafaRankingUrl)
            .map((response) => response)
            .catch(this.handleError);
    }

    // createranking(ranking: Ranking): Observable<Ranking> {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     return this.http.post(this.rankingUrl, JSON.stringify(ranking), { headers: headers })
    //         .map(response => response.json())
    //         .catch(this.handleError);
    // }

    // updateranking(ranking: Ranking): Observable<Ranking> {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     return this.http.put(this.rankingUrl + "/" + ranking.id, JSON.stringify(ranking), { headers: headers })
    //         .map(response => response.json())
    //         .catch(this.handleError);
    // }

    // deleteranking(id: string) {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     return this.http.delete(this.rankingUrl + "/" + id, { headers: headers })
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
