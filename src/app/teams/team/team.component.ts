import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerDetailsComponent } from '../../players/player-details/player-details.component';

import { PlayersService } from '../../players/shared/players.service';
import { TeamsService } from '../../teams/shared/teams.service';
import { Player } from '../../players/shared/player.model';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  providers: [PlayersService, TeamsService],
})

export class TeamComponent implements OnInit {

  public goalkeeperPlayers: Player[] = [];
  public defenderPlayers: Player[] = [];
  public midfieldPlayers: Player[] = [];
  public attackerPlayers: Player[] = [];

  public players: Player[];
  public errorMessage: string;
  private sub: any;

  constructor(private playersService: PlayersService, private titleService: Title, private route: ActivatedRoute, private teamService: TeamsService) {
  }

  public ngOnInit() {
    this.titleService.setTitle('F.C Uffheim - Equipe');

    this.sub = this.route.params.subscribe((params) => {
      // Clear because can be redirected from the same page
      this.players = [];
      this.goalkeeperPlayers = [];
      this.defenderPlayers = [];
      this.midfieldPlayers = [];
      this.attackerPlayers = [];

      let id = params['id'];
      this.teamService.getPlayers(id).subscribe(
        (players) => {
          this.players = players;

          this.players.forEach((element) => {
            if (element.position === 'Milieu') {
              this.midfieldPlayers.push(element);
            } else if (element.position === 'Gardien') {
              this.goalkeeperPlayers.push(element);
            } else if (element.position === 'Defenseur') {
              this.defenderPlayers.push(element);
            } else if (element.position === 'Attaquant') {
              this.attackerPlayers.push(element);
            }
          });
        }
        ,
        (error) => this.errorMessage = <any> error);
      ;
    });
    // this.getPlayers();
  }

  public getPlayers() {
    this.playersService.getplayers().subscribe(
      (players) => {
        this.players = players;
        this.players.forEach((element) => {
          if (element.position === 'Milieu') {
            this.midfieldPlayers.push(element);
          } else if (element.position === 'Gardien') {
            this.goalkeeperPlayers.push(element);
          } else if (element.position === 'Defenseur') {
            this.defenderPlayers.push(element);
          } else if (element.position === 'Attaquant') {
            this.attackerPlayers.push(element);
          }
        });
      },
      (error) => this.errorMessage = <any> error);
  }
}
