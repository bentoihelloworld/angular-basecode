import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component( {
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
} )
export class ChildComponent implements OnInit {

    @Input( "mssg" ) message: string;
    @Input() sender: string;
    @Output() send = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    sendMessage() {
        this.send.emit(
            {
                name: "baby",
                message: "I love you 6000!"
            }
        );
    }

}
