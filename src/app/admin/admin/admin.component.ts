import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Article, ArticlesService } from '../../articles/shared/index';

import { PlayersService } from '../../players/shared/players.service';
import { Player } from '../../players/shared/player.model';

import { GamesService } from '../../games/shared/games.service';
import { Game } from '../../Games/shared/game.model';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    providers: [ArticlesService, AuthenticationService, PlayersService, GamesService],
})

export class AdminComponent implements OnInit {
    @Output()
    public selectedArticle: Article;
    public articles: Article[];
    public players: Player[];
    public games: Game[];
    public errorMessage: string;
    public articlesCount: number;
    public playersCount: number;

    constructor(private articlesService: ArticlesService, private router: Router, private authenticationService: AuthenticationService, private playersService: PlayersService, private gameservice: GamesService) {
    }

    public getPlayers() {
        this.playersService.getplayers().subscribe(
            (players) => {
                this.players = players;
                this.playersCount = players.length;
            },
            (error) => this.errorMessage = <any> error);
    }

    public getArticles() {
        this.articlesService.getArticles().subscribe(
            (articles) => {
                this.articles = articles;
                this.articlesCount = articles.length;
            },
            (error) => this.errorMessage = <any> error);
    }

    public getGames() {
        this.gameservice.getGames().subscribe(
            (games) => {
                this.games = games;
            },
            (error) => this.errorMessage = <any> error);
    }

    public onselect(article: Article) {
        this.selectedArticle = article;
        this.goToDetails(this.selectedArticle);
    }

    public onPlayerSelect(player: Player) {
        this.goToPlayerDetails(player);
    }

    public onGameSelect(game: Game) {
        this.goToEditGame(game);
    }

    public goToEditGame(game: Game) {
        this.router.navigate(['/editGame', game.Id]);
    }

    public goToPlayerDetails(player: Player) {
        this.router.navigate(['/player', player.id]);
    }

    public goToDetails(article: Article) {
        this.router.navigate(['/article', article.id]);
    }

    public ngOnInit() {
        if (!this.authenticationService.checkCredentials()) {
            this.router.navigate(['/login']);
        } else {
            this.getArticles();
            this.getPlayers();
            this.getGames();
        }
    }
}
