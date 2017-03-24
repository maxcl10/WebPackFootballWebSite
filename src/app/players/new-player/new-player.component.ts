import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Player } from '../shared/player.model';
import { PlayersService } from '../shared/players.service';

@Component({
    selector: 'new-player',
    templateUrl: './new-player.component.html',
    providers: [PlayersService]
})

export class NewPlayerComponent {

    public player: Player;
    public errorMessage: string;
    public successfull: boolean;

    constructor(private playersService: PlayersService) {
        this.player = new Player();
        this.successfull = false;
    }

    public savePlayer() {
        this.playersService.createplayer(this.player).subscribe(
            (player) => {
                this.successfull = true;
                this.errorMessage = null;
            },
            (error) => this.errorMessage = <any> error);
    }

    public goBack() {
        window.history.back();
    }
}
