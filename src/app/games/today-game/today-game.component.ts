import { Component, OnInit } from '@angular/core';
import { GamesService } from '../shared/games.service';
import { LogoService } from '../../shared/services/logo.service';
import { Game } from '../shared/game.model';

@Component({
    selector: 'today-game',
    templateUrl: './today-game.component.html',
    providers: [GamesService, LogoService]

})
export class TodayGameComponent implements OnInit {

    public game: Game;
    public errorMessage: string;
    public isToday = false;

    constructor(private gamesService: GamesService, private logoService: LogoService) {

    }

    public ngOnInit() {
        this.getNextGame();
    }

    public isGameToday(): boolean {
        let today = new Date();
        let matchDate = new Date(this.game.MatchDate.toString());
        if (matchDate.getDate() === today.getDate() &&
            matchDate.getMonth() === today.getMonth() &&
            matchDate.getFullYear() === today.getFullYear()) {
            return true;
        }
        return false;
    }

    public getNextGame() {
        this.gamesService.getNextGame().subscribe(
            (game) => {
                this.game = game;
                this.game.awayTeamLogoUrl = this.logoService.getLogoPath(this.game.AwayTeam, 100);
                this.game.homeTeamLogoUrl = this.logoService.getLogoPath(this.game.HomeTeam, 100);

                this.isToday = this.isGameToday();
            },
            (error) => this.errorMessage = <any> error);
    }
}
