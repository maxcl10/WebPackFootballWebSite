import {Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Player} from '../shared/player.model'
import {PlayersService} from '../shared/players.service';
import {FrDatePipeComponent} from '../../shared/pipes/fr-date-pipe'

@Component({
    selector: 'player',
    templateUrl: './player.component.html',
    providers: [PlayersService],  
})

export class PlayerComponent implements OnInit {

    player: Player;
    errorMessage: string;

    public get playerAge(): number {
        return this.getAge(this.player.dateOfBirth);
    }

    constructor(private playerService: PlayersService, private route: ActivatedRoute, private router: Router) {
        this.player = new Player();
    }

    private sub: any;

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.getPlayer(id);;
        });
    }

    getPlayer(id: string) {
        this.playerService.getplayer(id).subscribe(
            player => {
                this.player = player;
            },
            error => this.errorMessage = <any>error);
    }

    getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    deletePlayer() {
        this.playerService.deleteplayer(this.player.id).subscribe(
            result => this.goBack(),
            error => this.errorMessage = <any>error)
    }

    goToEdit() {
        this.router.navigate(['/editPlayer', this.player.id]);
    }


    goBack() {
        window.history.back();
    }



}



