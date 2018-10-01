import { Component, ViewChild, OnInit, ChangeDetectorRef } from "@angular/core";
import { isAndroid, isIOS } from "tns-core-modules/ui/page/page";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RouterExtensions } from "nativescript-angular/router";
import { CommonService } from "~/data-services/common.service";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  moduleId: module.id
})
export class DashboardComponent implements OnInit {

  title: string = "Dashboard";
  isAndroid;
  isIos;

  constructor(private router: RouterExtensions, private _changeDetectionRef: ChangeDetectorRef, private commonService: CommonService) {
  }

  ngOnInit() {
    if (isAndroid) {
      this.isAndroid = true;
    }
    else if (isIOS) {
      this.isIos = true;
    }
  }

  private _mainContentText: string;


  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }


  get mainContentText() {
    return this._mainContentText;
  }

  set mainContentText(value: string) {
    this._mainContentText = value;
  }

  public openDrawer() {
    this.drawer.showDrawer();
  }

  public onCloseDrawerTap() {
    this.drawer.closeDrawer();
  }

  routeTo(path, title) {
    this.title = title;
    this.onCloseDrawerTap();
    this.router.navigate([path], {
      transition: {
        name: 'fade',
        curve: 'linear'
      }
    });
  }


  get isAddCounts() {
    return this.commonService.isAddCountsPage;
  }

  submit() {
    this.commonService.isAddCountsPage = false;
    this.router.back();
  }

  reset() {
    dialogs.confirm({
      title: "Do you want to Reset Counter",
      message: "In case you reset the counter your durood pak counts will be lost",
      okButtonText: "Reset",
      cancelButtonText: "Cancel",
    }).then(result => {
      // result argument is boolean
      console.log("Dialog result: " + result);
    });
  }

}


