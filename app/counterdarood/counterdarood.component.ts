import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { UserDataService } from '~/data-services/user-data.service';
import { CommonService } from '~/data-services/common.service';

@Component({
  selector: 'app-counterdarood',
  templateUrl: './counterdarood.component.html',
  styleUrls: ['./counterdarood.component.css'],
  moduleId: module.id,
})
export class CounterdaroodComponent implements OnInit {

  get getCounter() {
    return this.userService.totalCountsCounter;
  }

  buttonToggle: boolean = true;

  constructor(private router: RouterExtensions, private _page: Page, private userService: UserDataService, private commonService: CommonService) { }
  

  ngOnInit() {
    this._page.actionBarHidden = true;
    this.commonService.isAddCountsPage = true; 
  }
  
  onButtonTap() {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~tapped");
    this.buttonToggle = false;
    this.userService.totalCountsCounter = this.userService.totalCountsCounter + 1;
    setTimeout(() => {
      this.buttonToggle = true;
    }, 1000);
  }

  
  

}
