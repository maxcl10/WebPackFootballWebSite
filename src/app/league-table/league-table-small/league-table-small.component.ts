import { Component, OnInit } from '@angular/core';

import { Ranking } from '../shared/league-table.model';
import { LeagueRankingsService } from '../shared/league-table.service';

@Component({
    selector: 'league-table-small',
    templateUrl: './league-table-small.component.html',
    providers: [LeagueRankingsService],
})

export class LeagueTableSmallComponent implements OnInit {

    public rankings: Ranking[];
    public errorMessage: string;

    constructor(private rankingService: LeagueRankingsService) {

    }

    public ngOnInit() {
        this.getRankings();
    }

    public getRankings() {
        this.rankingService.getRankings().subscribe(
            (rankings) => {
                let myTeamPosition = rankings.find((o) => o.team === 'Uffheim F.C.').position;
                if (myTeamPosition <= 2) {
                    // We want to display the 3 first and the two latest
                    let firstTeams = rankings.filter((o) => o.position <= 3);
                    this.rankings = firstTeams;

                    let latestTeams = rankings.filter((o) => o.position > 12);
                    latestTeams.forEach((element) => {
                        this.rankings.push(element);
                    });
                }
                else if (myTeamPosition >= 12) {
                    // We want to display the 2 first and the 3 latest
                    let firstTeams = rankings.filter((o) => o.position <= 2);
                    this.rankings = firstTeams;

                    let latestTeams = rankings.filter((o) => o.position > 11);
                    latestTeams.forEach((element) => {
                        this.rankings.push(element);
                    });
                }
                else {
                    let firstTeams = rankings.filter((o) => o.position <= 2);
                    this.rankings = firstTeams;

                    let middleTeams = rankings.filter((o) => o.position >= myTeamPosition - 1 && o.position <= myTeamPosition + 1);
                    middleTeams.forEach((element) => {
                        this.rankings.push(element);
                    });

                    let latestTeams = rankings.filter((o) => o.position > 12);
                    latestTeams.forEach((element) => {
                        this.rankings.push(element);
                    });
                }
            },
            (error) => this.errorMessage = <any>error);
    }
}
