import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'pm-auth',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.css', '../artist/artist.component.css']
})

export class AuthComponent implements OnInit{

    constructor(private authService: AuthService){

    }

    ngOnInit(): void {
        console.log("init");
    }

    testAuth() : void {
        
        console.log("clicked");
        console.log(this.authService.authorize());
    }

}