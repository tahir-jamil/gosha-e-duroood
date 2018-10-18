import { Component, ViewChild, OnInit, ChangeDetectorRef } from "@angular/core";
import { isAndroid, isIOS } from "tns-core-modules/ui/page/page";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RouterExtensions } from "nativescript-angular/router";
import { CommonService } from "~/data-services/common.service";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { UserDataService } from "~/data-services/user-data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  moduleId: module.id
})
export class DashboardComponent implements OnInit {

  title: string = "Dashboard";
  email = "";
  isAndroid;
  isIos;
  animate: boolean = false;

  constructor(private router: RouterExtensions, private _changeDetectionRef: ChangeDetectorRef, private commonService: CommonService, private userService: UserDataService) {
  }

  ngOnInit() {
    if (isAndroid) {
      this.isAndroid = true;
    }
    else if (isIOS) {
      this.isIos = true;
    }
    this.email = localStorage.getItem("email");
  }

  get getEmail() {
    return this.email;
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

  get isAnimate() {
    return this.animate;
  }


  submit() {

    this.animate = true;
    setTimeout(() => {
      this.animate = false;
    }, 200);

    let data = {
      duroodCount: this.userService.totalCountsCounter,
      party_id: parseInt(localStorage.getItem("partyId"))
    };

    if(data.duroodCount != 0 ){ 

      
      this.userService.postCountsData(data).subscribe(res => {

        this.commonService.isAddCountsPage = false;
        console.dir(res);
        this.showSuccess();
        
        this.userService.totalCountsCounter = 0;
        this.router.back();
      }, (error) => {
        console.dir(error);
        this.showError();
      });
    }
    else {
      this.showError();
    }
  }    

  reset() {

    this.animate = true;
    setTimeout(() => {
      this.animate = false;
    }, 200);

    dialogs.confirm({
      title: "Do you want to Reset Counter",
      message: "In case you reset the counter your durood pak counts will be lost",
      okButtonText: "Reset",
      cancelButtonText: "Cancel",
    }).then(result => {
      if(result==true){
        this.userService.totalCountsCounter = 0;
      }
      // result argument is boolean
      console.log("Dialog result: " + result);
    });

  }

  public showSuccess() {
    TNSFancyAlert.showSuccess("Successful", "You have Submitted Darood Succefully ", "Dismiss");
  }
  public showError() {
    TNSFancyAlert.showError("Error", "No Count Found ", "Dismiss");
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'], {
      transition: {
        name: 'SlideRight',
        curve: 'linear'
      }
    });
  }
}


