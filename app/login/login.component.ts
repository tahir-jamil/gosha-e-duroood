import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { UserDataService } from '~/data-services/user-data.service';
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


  login() {
    if ((this.user.email && this.user.password)) {
      this.userData.login(this.user).subscribe(res => {
        localStorage.setItem("partyId", res[0].id);
        this.confirmLogin();
      }, error => {
        console.dir(error);
      });
    }
  }

  confirmLogin() {
    this.routerExtensions.navigate(['/dashboard'], {
      transition: {
        name: 'slideLeft',
        curve: 'linear'
      }
    });
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