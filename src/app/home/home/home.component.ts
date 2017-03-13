import { Component, Output, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Article } from '../../articles/shared/article.model';
import { ArticlesService } from '../../articles/shared/articles.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [ArticlesService]
})

export class HomeComponent implements OnInit {

  public articles: Article[];
  public loaded = false;
  public errorMessage: string;

  constructor(private articlesService: ArticlesService, private titleService: Title) {

  }

  public getArticles() {
    this.articlesService.getArticles().subscribe(
      (articles) => {
        this.articles = articles;
        this.loaded = true;
      },
      (error) => this.errorMessage = <any> error);
  }

  public ngOnInit() {
    this.titleService.setTitle('F.C Uffheim - Site officiel');
    this.getArticles();
  }
}
