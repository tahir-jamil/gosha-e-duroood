import { Component, OnInit } from '@angular/core';
import { Goshaenasheen } from "~/data-services/user";
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { TNSFancyAlert } from "nativescript-fancyalert";
import { CommonService } from '~/data-services/common.service';

@Component({
  selector: 'app-applyGoasha',
  templateUrl: './applyGoasha.component.html',
  styleUrls: ['./applyGoasha.component.css'],
  moduleId: module.id,
})
export class ApplyForGoshaENasheenComponent implements OnInit {
  private _user: Goshaenasheen;

  constructor(private routerExtensions: RouterExtensions, private _page: Page, private commonService: CommonService) {
  }
  public showSuccess() {
    TNSFancyAlert.showSuccess("Successful", "You Have successfully Apply for Gosha nasheen", "navigateTo('/dashboard')");
  }

  public showError() {
    TNSFancyAlert.showError("Error!", "Oh no, something went wrong.", "Dismiss");
  }

  ngOnInit() {
    this._user = new Goshaenasheen("", "", "", 0, 0, 0, false, "", "", "", "", "", "", "", "", "", "", "", false, "");
    this._page.actionBarHidden = true;
    this.commonService.isAddCountsPage = false;

  }
  get user(): Goshaenasheen {
    return this._user;
  }
  options_edu = ["Post Graduation", "Under Graduation ", "Graduation", "Matriculation", "Diploma"];
  options_ashra = ["first", "Second", "Third"];
  navigateTo(path) {
    this.routerExtensions.navigate([path], {
      transition: {
        name: "fade",
        curve: "linear"
      }
    });
  }
}
