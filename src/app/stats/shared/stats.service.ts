import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { RankingHistory } from './rankingHistory.model';

@Injectable()
export class StatsService {

    private statsUrl = 'http://88.121.16.195/Services/FcHagenthalService/api/ns/stats/';

    constructor(private http: Http) {

    }

    public getShape(): Observable<string[]> {
        return this.http.get(this.statsUrl + '/getShape')
            .map((response) => response.json())
            .catch(this.handleError);
    }

    public getRankingHistory(): Observable<RankingHistory[]> {
        return this.http.get(this.statsUrl + '/getRankingHistory')
            .map((response) => response.json())
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
