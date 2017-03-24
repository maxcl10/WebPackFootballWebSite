import { Component, Output, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  // providers: [ArticlesService]
})

export class ContactComponent implements OnInit {

  public errorMessage: string;

  constructor(private titleService: Title) {

  }

  public ngOnInit() {
    this.titleService.setTitle('F.C Uffheim - Contact');
  }
}
