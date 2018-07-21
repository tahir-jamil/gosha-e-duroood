import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id
})
export class LoginComponent implements OnInit {

  user: { email:string , password:string } = { 
    email:"",
    password:""
  }
  constructor(private routerExtensions: RouterExtensions,private _page: Page) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

  login() {
    console.log("the use is "+this.user.email);
  }

  navigateTo() {
    this.routerExtensions.navigate(['./signup'], {
      transition: {
        name: "fade",
        curve: "linear"
      }
    });
  }
  
}