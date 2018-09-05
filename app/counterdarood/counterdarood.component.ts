import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { TNSFancyAlert } from "nativescript-fancyalert";

@Component({
  selector: 'app-counterdarood',
  templateUrl: './counterdarood.component.html',
  styleUrls: ['./counterdarood.component.css'],
  moduleId:module.id,
})
export class CounterdaroodComponent implements OnInit {
  

  constructor(private router: RouterExtensions, private _page: Page ) { }
  public showSuccess() {
    TNSFancyAlert.showSuccess("Successful", "You have Submitted Darood Succefully " ,"Dismiss");
}

public showError() {
    TNSFancyAlert.showError("Error!", "Oh no, something went wrong.", "Dismiss");
}
  ngOnInit() {
    this._page.actionBarHidden = false;
  }

  navigateTo(path) {
    this.router.navigate([path], {
      transition: {
        name: 'fade',
        curve: 'linear'
      }
    });
  }
}
