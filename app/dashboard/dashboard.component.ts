import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Page, isAndroid, isIOS } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RouterExtensions } from "nativescript-angular/router";

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
  constructor(private router: RouterExtensions, private _changeDetectionRef: ChangeDetectorRef) {
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
}
