import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'club',
  templateUrl: './club.component.html',
})

export class ClubComponent implements OnInit {

  constructor(private titleService: Title) {
  }

  public ngOnInit() {
    this.titleService.setTitle('F.C Uffheim - Club');
  }
}
