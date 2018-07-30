import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  moduleId:module.id
})
export class AccountComponent implements OnInit {

  constructor(private _page: Page) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

}
