import { Component, OnInit } from '@angular/core';
import { Page, isIOS, Color } from 'tns-core-modules/ui/page/page';
import { GestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.css'],
  moduleId:module.id
})
export class DashboardContentComponent implements OnInit {
  
  isTapped: boolean = false;
  notificationState:boolean = false;

  constructor(private _page: Page) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

  dataItems =['1','2','3','4','5','6','7','8','9'];
  
  onItemLoading(args) {
    console.log("onItemLoading");
    if (isIOS) {
      console.log(args.ios);
      var newcolor = new Color("transparent");
      args.ios.backgroundView.backgroundColor = newcolor.ios;
    }
  }

  onTap(event: GestureEventData) {
    
    setTimeout(() => {
      this.isTapped = true;
    }, 10);
    this.isTapped = false;
  }
  
  get loaded() {
    return this.notificationState;
  }
  
  working() {
    console.log("working");
    this.notificationState = !this.notificationState;
  }
}
