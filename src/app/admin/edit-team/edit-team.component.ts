import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { Player } from '../../players/shared/player.model';
import { TeamsService } from '../../teams/shared/teams.service';

// import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'edit-team',
    templateUrl: './edit-team.component.html',
    providers: [TeamsService],
})

export class EditTeamComponent implements OnInit {

    @Input()
    public players: Player[];

    public teamId: string;
    public firstTeamPlayers: Player[];
    public secondTeamPlayers: Player[];
    public errorMessage: string;

    constructor(private teamService: TeamsService) {
        // Equipe1
        this.teamId = 'b8bc86da-9eea-4820-a5d5-c9f57b3b7d80';
        // Equipe 2 3707ef89-38c6-4f94-bc97-98238eaef435
    }

    public ngOnInit() {
        if (this.players == null) {
            alert('t3e');
        }

        this.teamService.getPlayers(this.teamId).subscribe(
            (players) => {
                this.firstTeamPlayers = players;
                this.players = this.arr_diff(this.players, this.firstTeamPlayers);
            },
            (error) => this.errorMessage = <any> error);
    }

    private arr_diff(a1: Player[], a2: Player[]): Player[] {
        let buffer = [];
        a1.forEach((element) => {
            if (a2.filter((o) => o.id === element.id).length === 0) {
                buffer.push(element);
            }
        });
        return buffer;
    };

    public add(player: Player) {
        this.teamService.addPlayerInTeam(player.id, this.teamId).subscribe(
            (res) => {
                if (res === true) {
                    this.firstTeamPlayers.push(player);
                    let index = this.players.indexOf(player);
                    this.players.splice(index, 1);
                }
            },
            (error) => this.errorMessage = <any> error);
    }

    public remove(player: Player) {
        this.teamService.removePlayerFromTeam(player.id, this.teamId).subscribe(
            (res) => {
                if (res === true) {
                    this.players.push(player);
                    let index = this.firstTeamPlayers.indexOf(player);
                    this.firstTeamPlayers.splice(index, 1);
                }
            }
        );
    }
}
