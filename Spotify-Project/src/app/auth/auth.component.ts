import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { IUser } from './user/user';

@Component({
    selector: 'pm-auth',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.css', '../artist/artist.component.css']
})

export class AuthComponent implements OnInit{

    userInfo: IUser = null;
    timeout: number = 5000;
    clicked: boolean = false;

    constructor(private authService: AuthService){}

    ngOnInit(): void {
        if(this.userInfo == null) {
            this.authService.getUserInfo().subscribe(data => {
                this.userInfo = data;
                console.log(this.userInfo);
            })
        }
    }

    Authorize() : void {
        console.log("clicked");
        this.authService.authorize();
        this.logIn();
    }

    toggleLougoutPopUp(): void {
        this.clicked = !this.clicked;
    }

    logIn(): void {
        setInterval(() => {
            if(this.userInfo == null) {
                this.authService.getUserInfo().subscribe(data => {
                    this.userInfo = data;
                    console.log(this.userInfo);
                })
            }
        }, 5000);
    }

    logOut(): void {
        this.authService.logOut().subscribe(data => {
            console.log("Logged Out");
            this.userInfo = null;
        });
    }

    

}