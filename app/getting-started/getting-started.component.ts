import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { TNSFancyAlert } from "nativescript-fancyalert";

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css'],
  moduleId: module.id
})
export class GettingStartedComponent implements OnInit {
  
  constructor(private routerExtensions: RouterExtensions,private _page: Page) { }
  public showSuccess() {
    TNSFancyAlert.showSuccess("Success!", "Something finished successfully.", "Dismiss");
}

public showError() {
    TNSFancyAlert.showError("Error!", "Oh no, something went wrong.", "Dismiss");
}
  ngOnInit() {
    this._page.actionBarHidden = true;
  }
  
  navigateTo(path) {
    this.routerExtensions.navigate([path], {
      transition: {
        name: 'fade',
        curve: 'linear'
      }
    });
  }

}
