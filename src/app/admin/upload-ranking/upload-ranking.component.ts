
import { Component, OnInit } from '@angular/core';
import { LeagueRankingsService } from '../../league-table/shared/league-table.service';

@Component({
  selector: 'upload-ranking',
  templateUrl: './upload-ranking.component.html',
  providers: [LeagueRankingsService]
})

export class UploadRankingComponent {

  public uploadFile: any;
  public success: boolean = false;
  public error: boolean;
  public errorMessage: string;

  public options: Object = {
    url: 'http://88.121.16.195/Services/FcHagenthalService/api/ranking'
  };

  constructor(private leagueService: LeagueRankingsService) {
  }

  public handleUpload(data: any): void {
    if (data && data.response) {
      if (data.response === true) {
        this.success = true;
        this.error = false;
      } else {
        data = JSON.parse(data.response);
        this.uploadFile = data;
        this.error = true;
        this.success = false;
      }
    }
  }

  public updateRankingFromLafa() {
    this.leagueService.updateRankingFromLafa().subscribe(
      (res) => {
        this.success = true;
      },
      (error) => this.errorMessage = <any>error);
  }

  public goBack() {
    window.history.back();
  }
}
