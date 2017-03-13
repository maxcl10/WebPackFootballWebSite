import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { Player } from '../../players/shared/player.model'
import { TeamsService } from '../../teams/shared/teams.service';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'edit-team',
    templateUrl: './edit-team.component.html',
    providers: [TeamsService],
})
export class EditTeamComponent implements OnInit {

    @Input()
    players: Player[];

    teamId: string;

    firstTeamPlayers: Player[];
    secondTeamPlayers: Player[];

    errorMessage: string;

    constructor(private teamService: TeamsService) {
        // //Equipe1
         this.teamId = "b8bc86da-9eea-4820-a5d5-c9f57b3b7d80";

        //Equipe2
        // this.teamId = "3707ef89-38c6-4f94-bc97-98238eaef435"; 

        // //Equipe 3
        //  this.teamId = "733388db-893d-4062-86e7-52c767c41db8";
        
    }


    private arr_diff(a1: Player[], a2: Player[]): Player[] {
        let buffer = [];
        a1.forEach(element => {
            if (a2.filter(o => o.id == element.id).length == 0) {
                buffer.push(element)
            }
        });
        return buffer;
    };


    ngOnInit() {
        if (this.players == null) {
            alert("t3e");
        }
        this.teamService.getPlayers(this.teamId).subscribe(
            players => {
                this.firstTeamPlayers = players;
                this.players = this.arr_diff(this.players, this.firstTeamPlayers)
            },
            error => this.errorMessage = <any>error);
    }

    private add(player: Player) {
        this.teamService.addPlayerInTeam(player.id, this.teamId).subscribe(
            res => {               
                if (res == true) {
                    this.firstTeamPlayers.push(player);
                    var index = this.players.indexOf(player);
                    this.players.splice(index, 1);
                }
            },
            error => this.errorMessage = <any>error);   
    }

    private remove(player: Player) {   
        this.teamService.removePlayerFromTeam(player.id, this.teamId).subscribe(
            res => {                
                if (res == true) {
                    this.players.push(player);
                    var index = this.firstTeamPlayers.indexOf(player);
                    this.firstTeamPlayers.splice(index, 1);
                }
            }
        );
    }
}
