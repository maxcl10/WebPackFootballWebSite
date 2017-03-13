import {Component, Output, OnInit, Input} from '@angular/core';
import { Title }     from '@angular/platform-browser';



@Component({    
  selector: 'contact',
  templateUrl: './contact.component.html',
  //providers: [ArticlesService]
})

export class ContactComponent implements OnInit {

  errorMessage: string;

  constructor( private titleService: Title) {
    
  }

  ngOnInit()
  {
     this.titleService.setTitle("F.C Uffheim - Contact");
  }
  
   


}



