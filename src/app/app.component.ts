/*
 * Angular 2 decorators and services
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  constructor(public appState: AppState, private teamsService: TeamsService, public router: Router) {

    this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          // comment has been removed
          ga('send', 'pageview', event.urlAfterRedirects);
        }
      });

    // Method to close the nav bar when clicking on a link on small screens
    $(document).on('click', '.navbar-collapse.in', function (e) {
      let JQuery: JQuery;

      if ($(e.target).is('a') && $(e.target).attr('class') !== 'dropdown-toggle') {
        $(this).collapse('hide');
      }
    });
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);

    this.teamsService.getHomeTeams().subscribe(
      (homeTeams) => {
        this.teams = homeTeams;
      },
      (error) => this.errorMessage = <any> error);
  }
}
