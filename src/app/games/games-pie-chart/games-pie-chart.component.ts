import { Component, OnInit, AfterViewInit } from '@angular/core';
// import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import { StatsService } from '../../stats/shared/stats.service';

@Component({
  selector: 'games-pie-chart',
  templateUrl: './games-pie-chart.component.html',
  // directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [StatsService]
})

export class GamesPieChartComponent implements OnInit {

  public errorMessage: string;
  public doughnutChartLabels: string[];
  public doughnutChartData: number[];
  public doughnutChartType: string;
  public doughnutChartColors: any[];
  public doughnutChartOptions: any;

  constructor(private statsService: StatsService) {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public ngOnInit() {
    this.statsService.getShape().subscribe(
      (res) => {
        let lossCount = res.filter((o) => o === 'P').length;
        let drawCount = res.filter((o) => o === 'N').length;
        let wonCount = res.filter((o) => o === 'G').length;
        this.doughnutChartData = [wonCount, drawCount, lossCount];
      },
      (error) => this.errorMessage = <any> error);

    this.doughnutChartLabels = ['Gagnés', 'Nuls', 'Perdus'];
    this.doughnutChartType = 'doughnut';
    this.doughnutChartColors = [
      {
        backgroundColor: ['#5cb85c', '#f0ad4e', '#d9534f'],
        borderColor: 'rgba(255,255,255,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
    ];

    this.doughnutChartOptions = {
      legend: {
        display: true,
        labels: {
          fontColor: '#3f2b5d'
        }

      },
      // title: {
      //   display: true,
      //   text: 'Custom Chart Title',
      //   fontColor: '#FFF'
      // }
    };
  }
}
