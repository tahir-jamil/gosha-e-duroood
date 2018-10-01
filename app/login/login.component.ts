import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { UserDataService } from '~/data-services/user-data.service';
import { DashboardComponent } from '~/dashboard/dashboard.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id
})
export class LoginComponent implements OnInit {

  user: { email: string, password: string } = {
    email: "",
    password: ""

  }

  constructor(private routerExtensions: RouterExtensions, private _page: Page, private userData: UserDataService, private http: HttpClient) {
  }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

  login(path) {
    // if((this.user.email== this.userData.bussinessData[0].email) && (this.user.password== this.userData.bussinessData[0].password) )
    this.navigateTo(path);
    // this.userData.getParty().subscribe(res => {
    //   console.dir(res);
    // }, error => {
    //   console.dir(error);

    // });
    // }
  }

  postData() {
    this.userData.postData([
      { username: 'secondName' },
      { name: 'secondName' },
      { email: 'secondName' },
      { password: 'secondName' },
      { fatherName: 'secondName' },
      { nic: 'secondName' },
      { dob: 'secondName' },
      { city: 'secondName' },
      { district: 'secondName' },
      { provience: 'secondName' },
      { country: 'secondName' },
      { phoneRes: 'secondName' },
      { phoneOff: 'secondName' },
      { phoneCell: 'secondName' },
      { education: 'secondName' },
      { profession: 'secondName' },
      { postalAddress: 'secondName' },
      { holyQuran: 0 },
    ]).subscribe(res => {
      console.dir(res);
    }, error => {
      console.dir(error);

    });
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