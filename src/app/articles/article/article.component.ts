import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Article, ArticlesService } from '../shared/index';
import { AuthenticationService } from '../../services/authentication.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'my-article',
    templateUrl: './article.component.html',
    providers: [AuthenticationService]
})

export class ArticleComponent implements OnInit {

    public article: Article;
    public errorMessage: string;
    public isAuthenticated: boolean;
    private sub: any;

    constructor(private articleService: ArticlesService, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService, private titleService: Title) {
        this.article = new Article();
    }

    public ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            let id = params['id']; // (+) converts string 'id' to a number
            this.getArticle(id);
        });
        this.isAuthenticated = this.authenticationService.checkCredentials();
    }

    public getArticle(id: string) {
        this.articleService.getArticle(id).subscribe(
            (article) => {
                this.article = article;
                this.titleService.setTitle(article.title);
            },
            (error) => this.errorMessage = <any> error);
    }

    public deleteArticle() {
        // todo: find workarround
        // $('#myModal').modal('hide')

        this.articleService.deleteArticle(this.article.id).subscribe(
            (result) => this.goToAdmin(),
            (error) => this.errorMessage = <any> error);
    }

    public goToEdit() {
        this.router.navigate(['/editArticle', this.article.id]);
    }

    public goToAdmin() {
        this.router.navigate(['/admin']);
    }

    public goBack() {
        window.history.back();
    }
}
