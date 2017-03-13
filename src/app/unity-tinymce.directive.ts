import {Directive} from '@angular/core';
declare var tinymce: any;
// Tinymce directive
@Directive({
    inputs: ['htmlEditor'],
    selector: '[htmlEditor]'
    })

export class EditorDirective{
    constructor(){
        tinymce.init({
            selector: 'textarea', //change this to a specific class/id
            schema: 'html5',
        });
    }
}