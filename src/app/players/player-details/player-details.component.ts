import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Player } from '../shared/player.model'
import { FrDatePipeComponent } from '../../shared/pipes/fr-date-pipe'

@Component({
    selector: 'player-details',
    templateUrl: './player-details.component.html',
})

export class PlayerDetailsComponent {

    @Input()
    player: Player;


    public get playerAge(): number {
        return this.getAge(this.player.dateOfBirth);
    }

    constructor() {

    }

    getAge(dateString) {
        var today = new Date();
        var match = dateString.match(/^(\d+)-(\d+)-(\d+)T(\d+)\:(\d+)\:(\d+)$/)
        var birthDate = new Date(match[1], match[2] - 1, match[3], match[4], match[5], match[6])
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}



