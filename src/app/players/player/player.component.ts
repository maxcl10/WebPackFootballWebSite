import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Player } from '../shared/player.model';
import { PlayersService } from '../shared/players.service';
import { FrDatePipeComponent } from '../../shared/pipes/fr-date-pipe';

@Component({
    selector: 'player',
    templateUrl: './player.component.html',
    providers: [PlayersService],
})

export class PlayerComponent implements OnInit {

    public player: Player;
    public errorMessage: string;
    private sub: any;

    public get playerAge(): number {
        return this.getAge(this.player.dateOfBirth);
    }

    constructor(private playerService: PlayersService, private route: ActivatedRoute, private router: Router) {
        this.player = new Player();
    }

    public ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            let id = params['id'];
            this.getPlayer(id);
        });
    }

    public getPlayer(id: string) {
        this.playerService.getplayer(id).subscribe(
            (player) => {
                this.player = player;
            },
            (error) => this.errorMessage = <any> error);
    }

    public getAge(dateString) {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

   public deletePlayer() {
        this.playerService.deleteplayer(this.player.id).subscribe(
            (result) => this.goBack(),
            (error) => this.errorMessage = <any> error);
    }

    public goToEdit() {
        this.router.navigate(['/editPlayer', this.player.id]);
    }

    public goBack() {
        window.history.back();
    }
}
