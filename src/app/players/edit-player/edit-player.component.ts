import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Player } from '../shared/player.model';
import { PlayersService } from '../shared/players.service';

@Component({
    selector: 'edit-player',
    templateUrl: './edit-player.component.html',
    providers: [PlayersService],
})

export class EditPlayerComponent implements OnInit {

    public player: Player;
    public errorMessage: string;
    private sub: any;

    constructor(private playersService: PlayersService, private route: ActivatedRoute) {
        this.player = new Player();
    }

    public getPlayer(id: string) {
        this.playersService.getplayer(id).subscribe(
            (player) => {
                this.player = player;
            },
            (error) => this.errorMessage = <any> error);
    }

    public savePlayer() {
        this.playersService.updateplayer(this.player).subscribe(
            (player) => {
                this.goBack();
            },
            (error) => this.errorMessage = <any> error);
    }

    public goBack() {
        window.history.back();
    }

    public ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            let id = params['id']; // (+) converts string 'id' to a number
            this.getPlayer(id);
        });
    }
}
