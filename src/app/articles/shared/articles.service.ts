import {Http, Response, Headers } from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import {Article} from '../shared/article.model'

@Injectable()
export class ArticlesService {
    private articleUrl = 'http://88.121.16.195/Services/FcHagenthalService/api/articles';

    constructor(private http: Http) {

    }

    getArticle(id: string): Observable<Article> {
     
        return this.http.get(this.articleUrl + "/" + id)
            .map(response => response.json())
            .catch(this.handleError);
    }

    getArticles(): Observable<Article[]> {

        return this.http.get(this.articleUrl)
            .map(response => response.json())
            .catch(this.handleError);
    }

    createArticle(article: Article): Observable<Article> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.articleUrl, JSON.stringify(article), { headers: headers })
            .map(response => response.json())
            .catch(this.handleError);
    }


    updateArticle(article: Article): Observable<Article> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put(this.articleUrl + "/" + article.id, JSON.stringify(article), { headers: headers })
            .map(response => response.json())
            .catch(this.handleError);
    }


    deleteArticle(id: string) {    
        return this.http.delete(this.articleUrl + "/" + id)
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


