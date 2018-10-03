import { Component, OnInit } from '@angular/core';
import { Page, isIOS, Color } from 'tns-core-modules/ui/page/page';
import { GestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { Console } from '@angular/core/src/console';
import { UserDataService } from '~/data-services/user-data.service';
import * as _ from "lodash";
import { RouterExtensions } from 'nativescript-angular/router';
import { CommonService } from '~/data-services/common.service';
@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.css'],
  moduleId: module.id
})
export class DashboardContentComponent implements OnInit {

  isTapped: boolean = false;
  notificationState: boolean = false;
  partyList;
  partytotal;
  fildata: any;
  constructor(private _page: Page, private userService: UserDataService, private routerExtensions: RouterExtensions, private commonService: CommonService) {

  }

  ngOnInit() {
    this._page.actionBarHidden = true;
    //  this.fildata= _.filter(this.counting, function(o) { return o.count; });
    //  this.pTotal=_.sumBy(this.fildata);
    this.commonService.isAddCountsPage = false;

  }

  dataItems = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  onItemLoading(args) {
    console.log("onItemLoading");
    if (isIOS) {
      console.log(args.ios);
      var newcolor = new Color("transparent");
      args.ios.backgroundView.backgroundColor = newcolor.ios;
    }
  }

  addnewCount(event: GestureEventData) {
    setTimeout(() => {
      this.isTapped = true;
      this.routerExtensions.navigate(['dashboard/counterdarood'], {
        transition: {
          name: 'slideRight',
          curve: 'linear'
        }
      });
    }, 10);
    this.isTapped = false;
  }

  onLoaded() {
    this.userService.getParty().subscribe(res => {
      console.dir(res);
      this.partyList = res;
    }, (error) => {
      console.dir(error);
    });

    this.userService.getPartyTotal().subscribe(res => {
      console.log("wokring ~~~~~~~~~~~~~~~~~~~~~~~~````");
      console.dir(res);
      this.partytotal = res;
    }, (error) => {
      console.dir(error);
    });
  }

  working() {
    console.log("working");
    this.notificationState = !this.notificationState;
  }


}
