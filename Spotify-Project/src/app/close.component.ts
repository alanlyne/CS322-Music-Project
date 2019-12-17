import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pm-close',
    templateUrl: './close.component.html',
    styleUrls: ['close.component.css', './close.component.css']
})

export class CloseComponent implements OnInit{

    ngOnInit(): void {
        window.close();
    }
    
}