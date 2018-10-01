import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { TNSFancyAlert } from "nativescript-fancyalert";
import { UserDataService } from '~/data-services/user-data.service';

@Component({
  selector: 'app-counterdarood',
  templateUrl: './counterdarood.component.html',
  styleUrls: ['./counterdarood.component.css'],
  moduleId: module.id,
})
export class CounterdaroodComponent implements OnInit {

  createCounts:any = {
    duroodCount:500,
    partyId:10
  };

  constructor(private router: RouterExtensions, private _page: Page, private userService: UserDataService) { }
  //   public showSuccess() {
  //     TNSFancyAlert.showSuccess("Successful", "You have Submitted Darood Succefully " ,"Dismiss");
  // }

  // public showError() {
  //     TNSFancyAlert.showError("Error!", "Oh no, something went wrong.", "Dismiss");
  // }
  ngOnInit() {
    this._page.actionBarHidden = true;
  }


  onButtonTap() {

    this.userService.postCountsData(this.createCounts).subscribe(res => {
      console.dir(res);
      console.dir(res);
      this.router.back()
    }, (error) => {
      console.dir(error);
    });

  }

}
