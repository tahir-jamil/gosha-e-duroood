import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { UserDataService } from '~/data-services/user-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TNSFancyAlert } from "nativescript-fancyalert";



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
    if (localStorage.getItem("email")) {
      this.confirmLogin();
    }
  }


  login() {
    if ((this.user.email && this.user.password)) {
      this.userData.login(this.user).subscribe(res => {
          localStorage.setItem("partyId", res[0].id);
          localStorage.setItem("email", res[0].email);
          this.confirmLogin();
      }, error => {
        this.showError();
        console.dir(error);
      });
    }
  }


  public showSuccess() {
    // TNSFancyAlert.showSuccess("Successful", "You have Submitted Darood Succefully ", "Dismiss");
  }

  public showError() {
    TNSFancyAlert.showError("Error", "Invalid username & email", "Dismiss");
  }

  confirmLogin() {
    this.routerExtensions.navigate(['/dashboard'], {
      transition: {
        name: 'slideLeft',
        curve: 'linear'
      }
    });
  }

}