import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { UserDataService } from '~/data-services/user-data.service';
import { DashboardComponent } from '~/dashboard/dashboard.component';

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

  constructor(private routerExtensions: RouterExtensions,private _page: Page,private userData : UserDataService ) {
   }
  
  ngOnInit() {
    this._page.actionBarHidden = true;
  }

  login() {
    // if((this.user.email== this.userData.bussinessData[0].email) && (this.user.password== this.userData.bussinessData[0].password) )
    // this.navigateTo(DashboardComponent);
      this.userData
          .postData({action:"login", username: "tahir", password: "tahir" })
          .subscribe(res => {
              console.dir(res);
          });
  // }
  }

  navigateTo(path) {
    this.routerExtensions.navigate([path], {
      transition: {
        name: "fade",
        curve: "linear"
      }
    });
  }
  
}