import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GamesService } from '../shared/games.service';
import { Game } from '../shared/game.model';

import { LogoService } from '../../shared/services/logo.service';

@Component({
    selector: 'last-game',
    templateUrl: './last-game.component.html',
    providers: [GamesService, LogoService],
})

export class LastGameComponent implements OnInit {

    public game: Game;
    public errorMessage: string;

    constructor(private gamesService: GamesService, private logoService: LogoService) {

    }

    public ngOnInit() {
        this.getLastGame();
    }

    public getLastGame() {
        this.gamesService.getLastGame().subscribe(
            (game) => {
                this.game = game;
                this.game.awayTeamLogoUrl = this.logoService.getLogoPath(this.game.AwayTeam, 30);
                this.game.homeTeamLogoUrl = this.logoService.getLogoPath(this.game.HomeTeam, 30);
            },
            (error) => this.errorMessage = <any> error);
    }
}
