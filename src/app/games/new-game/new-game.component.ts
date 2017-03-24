import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SummernoteComponent } from '../../summernote.component';
import { Game } from '../shared/game.model';
import { GamesService } from '../shared/games.service';
import { Team } from '../../teams/shared/team.model';
import { TeamsService } from '../../teams/shared/teams.service';
import { NewTeamComponent } from '../../teams/new-team/new-team.component';

@Component({
    selector: 'new-article',
    templateUrl: './new-game.component.html',
    providers: [GamesService, TeamsService],
})

export class NewGameComponent {

    public newTeamVisible: boolean;
    public teams: Team[];
    public game: Game;
    public errorMessage: string;
    public successfull: boolean;

    constructor(private gamesService: GamesService, private teamsService: TeamsService) {
        this.game = new Game();
        this.successfull = false;
        this.getTeams();
        this.newTeamVisible = false;
    }

    public saveGame() {
        this.gamesService.createGame(this.game).subscribe(
            (game) => {
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

    public goBack() {
        window.history.back();
    }

    public showNewTeamPanel() {
        // todo: find workarround
        // $('#newTeamModal').modal('show')
    }

    public onTeamAdded(team: Team) {
        this.teams.push(team);
    }
}
