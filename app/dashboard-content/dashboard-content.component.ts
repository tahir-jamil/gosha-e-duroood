import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css'],
  moduleId:module.id
})
export class DashboardContentComponent implements OnInit {

  constructor(private _page: Page) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

}
