import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { IUser } from './auth/user/user';

@Component({
    selector: 'pm-close',
    templateUrl: './close.component.html',
    styleUrls: ['close.component.css', './close.component.css']
})

export class CloseComponent implements OnInit{

    constructor(private authService: AuthService) {

    }

    ngOnInit(): void {
        window.close();
    }    
}