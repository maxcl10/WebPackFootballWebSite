import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../shared/games.service';
import { Game } from '../shared/game.model';
import { Team } from '../../teams/shared/team.model';
import { TeamsService } from '../../teams/shared/teams.service';

@Component({
    selector: 'edit-game',
    templateUrl: './edit-game.component.html',
    providers: [GamesService, TeamsService]

})

export class EditGameComponent implements OnInit {

    public game: Game;
    public errorMessage: string;
    public teams: Team[];
    private sub: any;

    constructor(private gamesService: GamesService, private teamsService: TeamsService, private route: ActivatedRoute) {
        this.game = new Game();
    }

    public getGame(id: string) {
        this.gamesService.getGame(id).subscribe(
            (game) => {
                this.game = game;
            },
            (error) => this.errorMessage = <any> error);
    }

    public saveGame() {
        this.gamesService.updateGame(this.game).subscribe(
            (article) => {
                this.goBack();
            },
            (error) => this.errorMessage = <any> error);
    }

    public getTeams() {
        this.teamsService.getTeams().subscribe(
            (teams) => {
                this.teams = teams;
            },
            (error) => this.errorMessage = <any> error);
    }

    public deleteGame()
    {
          this.gamesService.deleteGame(this.game.Id).subscribe(
            (article) => {
                this.goBack();
            },
            (error) => this.errorMessage = <any> error);
    }

    public goBack() {
        window.history.back();
    }

    public ngOnInit() {
        this.getTeams();
        this.sub = this.route.params.subscribe((params) => {
            let id = params['id']; // (+) converts string 'id' to a number
            this.getGame(id);
        });
    }
}
