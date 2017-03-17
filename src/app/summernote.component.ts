import { Component, Directive, ElementRef, OnInit, AfterViewInit, EventEmitter, Output, Input, Inject, ComponentRef} from '@angular/core';

@Component({
    selector: 'summernote',    
    template: ` <div id="summerNoteFormGroup" class="form-group">
    <div >
        <textarea id="baseTextArea">{{htmlContent}}</textarea>
    </div>
</div>`

})


export class SummernoteComponent {


    private htmlContent: string;

    @Output() contentChanged = new EventEmitter<any>();


    @Input() set content(content) {
        if (content != undefined) {
            this.htmlContent = content;
            // this.onInit();
        }
    }

    ngOnInit() {
     
        // $('#baseTextArea').summernote({
        //     height: 300,
        //     callbacks: {
        //         onChange: this.onChange.bind(this),
        //         // onInit: this.onInit.bind(this)
        //     },

        // });


    }

    onInit() {       
        // $('#baseTextArea').summernote('editor.insertText', this.htmlContent);
    }

    onChange(contents, $editable) {
        this.contentChanged.emit(contents)
    }

    constructor() {

    }

    ngOnDestroy() {
        // $('#baseTextArea').destroy();
    }

}