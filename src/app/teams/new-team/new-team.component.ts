import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Team } from '../shared/team.model';
import { TeamsService } from '../shared/teams.service';

@Component({
    selector: 'new-team',
    templateUrl: './new-team.component.html',
    providers: [TeamsService]
})
export class NewTeamComponent {

    public team: Team;
    public errorMessage: string;
    public successfull: boolean;

    @Output()
    public teamAdded = new EventEmitter();

    constructor(private teamsService: TeamsService) {
        this.team = new Team();
        this.successfull = false;
    }

    public saveTeam() {
        this.teamsService.createTeam(this.team).subscribe(
            (team) => {
                this.successfull = true;
                this.errorMessage = null;
                this.teamAdded.next(team);
            },
            (error) => this.errorMessage = <any> error);
    }

    public goBack() {
        window.history.back();
    }
}
