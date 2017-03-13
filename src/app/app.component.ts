/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core'
  ;
import { AppState } from './app.service';
import { Router, Event, NavigationEnd } from '@angular/router';

import { TeamsService } from './teams/shared/teams.service';
import { Team } from './teams/shared/team.model';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  providers: [TeamsService],
})
export class AppComponent implements OnInit {

  public teams: Team[];
  public errorMessage: string;

  constructor(public appState: AppState, private teamsService: TeamsService) {

  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);

    this.teamsService.getHomeTeams().subscribe(
      (homeTeams) => {
        this.teams = homeTeams;
      },
      (error) => this.errorMessage = <any>error);
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
