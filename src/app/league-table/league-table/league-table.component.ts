import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Ranking } from '../shared/league-table.model';
import { LeagueRankingsService } from '../shared/league-table.service';
import { LogoService } from '../../shared/services/logo.service';

@Component({
    selector: 'league-table',
    templateUrl: './league-table.component.html',
    providers: [LeagueRankingsService, LogoService],
})

export class LeagueTableComponent implements OnInit {

    public rankings: Ranking[];
    public errorMessage: string;

    constructor(private rankingService: LeagueRankingsService, private logoService: LogoService) {

    }

    // ngAfterViewInit()
    // {
    //     // var rows = $('#leagueTable > tbody > tr');
    //     // alert(rows.length);
    // }

    public ngOnInit() {
        this.getRankings();
    }

    public getRankings() {
        this.rankingService.getRankings().subscribe(
            (rankings) => {
                rankings.forEach((element) => {
                    element.imageUrl = this.logoService.getLogoPath(element.team, 30);
                });
                this.rankings = rankings;
            },
            (error) => this.errorMessage = <any> error);
    }
}
