import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'player',
    templateUrl: './sponsor.component.html',
})

export class SponsorComponent implements OnInit {

    constructor(private titleService: Title) {
    }

    public ngOnInit() {
        this.titleService.setTitle('F.C Uffheim - Partenaires');
    }
}
