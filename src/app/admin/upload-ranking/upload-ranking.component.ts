
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upload-ranking',
  templateUrl: './upload-ranking.component.html',
})

export class UploadRankingComponent {

  public uploadFile: any;
  public success: boolean = false;
  public error: boolean;
  public errorMessage: string;

  public options: Object = {
    url: 'http://88.121.16.195/Services/FcHagenthalService/api/ranking'
  };

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

  public goBack() {
    window.history.back();
  }
}
