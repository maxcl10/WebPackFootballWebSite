import { Component, Directive, ElementRef, OnInit, AfterViewInit, EventEmitter, Output, Input, Inject, ComponentRef} from '@angular/core';

import {Http} from '@angular/http';

declare var tinymce: any;

@Component({
    selector: 'unity-tinymce',
   
    templateUrl: './unity-tinymce.html',


})


// @Directive({
//   selector: '[ngModel]',
//   host: {
//     "[value]": 'ngModel',
//     "(input)": "ngModelChange.next($event.target.value)"
//   }
// })

export class UNITYTinyMCE {

    private elementRef: ElementRef;
    private elementID: string;
    private htmlContent: string;

    // @Input() mceContent: any;
    @Input() set mceContent(content) {
        if (content != undefined) {

           this.htmlContent = content;
           
          
            //Attach tinyMCE to cloned textarea
            tinymce.init(
                {
                    mode: 'exact',
                    height: 500,
                    theme: 'modern',
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table contextmenu paste code'
                    ],
                    toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                    selector: 'textarea#baseTextArea',
                    setup: this.tinyMCESetup.bind(this)
                }
            );
        }
    }

    @Output() contentChanged: EventEmitter<any>;

    constructor() {
        // this.elementRef = elementRef;

        //var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        //var uniqid = randLetter + Date.now();

        //this.elementID = 'tinymce' + uniqid;
        this.contentChanged = new EventEmitter();
    }



    ngOnDestroy() {  
        //destroy cloned elements
        tinymce.get("baseTextArea").remove();

    //      var elem = document.getElementById('baseTextArea');
    //   elem.parentElement.removeChild(elem);

    }


    tinyMCESetup(ed) {
        ed.on('keyup change', this.tinyMCEOnKeyup.bind(this));
    }

    tinyMCEOnKeyup(e) {
        this.contentChanged.emit(tinymce.get('baseTextArea').getContent());
    }



}