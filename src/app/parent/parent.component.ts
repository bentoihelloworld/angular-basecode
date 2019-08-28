import { Component, OnInit, DoCheck } from '@angular/core';

@Component( {
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
} )
export class ParentComponent implements OnInit, DoCheck {
    ngDoCheck(): void {
       console.log("ngDocheck called....");
    }

    message: string;
    parentName: string;
    response: any;

    constructor() { }

    ngOnInit() {
        
        this.message = "I love you 3000";
        this.parentName = "Mommy";
        
        console.log("ngOnInit called...")
    }

    sendMessage() {
    
    }

    onReply( response: any ) {
        this.response = response;
    }

}
