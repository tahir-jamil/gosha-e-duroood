import { Component, OnInit } from '@angular/core';
import { RemoteUser } from '~/signup/user-data-service';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  moduleId: module.id
})

export class SignupComponent implements OnInit {

  private _user: RemoteUser;
  constructor(private _page: Page) {
  }

  ngOnInit() {
    this._user = new RemoteUser("", "", "", "", "", "", "", "", "", "", "", 0, 0, 0, "", false, "");
      // this._page.actionBarHidden = true;
  }

  get user(): RemoteUser {
    return this._user;
  }
}
