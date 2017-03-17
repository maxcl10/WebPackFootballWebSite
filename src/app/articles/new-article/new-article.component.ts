import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';

import { Article, ArticlesService } from '../shared/index';

@Component({
    selector: 'new-article',
    templateUrl: './new-article.component.html',
    providers: [ArticlesService],
})

export class NewArticleComponent {
    public article: Article;
    public errorMessage: string;
    public successfull: boolean;

    constructor(private articlesService: ArticlesService) {
        this.articlesService = articlesService;
        this.article = new Article();
        this.successfull = false;
    }

    public saveArticle() {
        this.articlesService.createArticle(this.article).subscribe(
            (article) => {
                this.goBack();
            },
            (error) => this.errorMessage = <any> error);
    }

    public goBack() {
        window.history.back();
    }

    public descriptionChanged(newDescription) {
        this.article.body = newDescription;
    }
}
