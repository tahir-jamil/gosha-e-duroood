import { Component, OnInit, ViewChild } from '@angular/core';
import { Goshaenasheen } from "~/data-services/user";
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { TNSFancyAlert } from "nativescript-fancyalert";
import { CommonService } from '~/data-services/common.service';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular/dataform-directives';
import { UserDataService } from '~/data-services/user-data.service';

@Component({
  selector: 'app-applyGoasha',
  templateUrl: './applyGoasha.component.html',
  styleUrls: ['./applyGoasha.component.css'],
  moduleId: module.id,
})
export class ApplyForGoshaENasheenComponent implements OnInit {
  private _user: Goshaenasheen;
  
  signUpForm = {
    ashra: ""
  };

  constructor(private routerExtensions: RouterExtensions, private _page: Page, private commonService: CommonService, private userDataService: UserDataService) {
  }

  public showSuccess() {
    TNSFancyAlert.showSuccess("Successful", "You Have successfully Apply for Gosha nasheen", "navigateTo('/dashboard')");
  }

  public showError() {
    TNSFancyAlert.showError("Error!", "Oh no, something went wrong.", "Dismiss");
  }

  ngOnInit() {
    this._user = new Goshaenasheen("Aslam", "Aslam", "Aslam", 0, 0, 0, false, "", "", "", "", "", "", "", "", "", "", "", false, "");
    this._page.actionBarHidden = true;
    this.commonService.isAddCountsPage = false;

  }
  get user(): Goshaenasheen {
    return this._user;
  }
  options_edu = ["Post Graduation", "Under Graduation ", "Graduation", "Matriculation", "Diploma"];
  options_ashra = ["first", "Second", "Third"];
  
  navigateTo() {
    this.routerExtensions.back();
  }

  @ViewChild('myCommitDataForm') myCommitDataFormComp: RadDataFormComponent;

  onPropertyCommitted() {
    if (this.myCommitDataFormComp.dataForm.editedObject) {
      this.signUpForm = this.myCommitDataFormComp.dataForm.editedObject;
    }
  }

  submitForm() {
    console.log("submit form");
    this.userDataService.postData(this.signUpForm).subscribe(res => {
      console.dir(res);
      this.routerExtensions.navigate(['/login'], {
        transition: {
          name: 'fade',
          curve: 'linear'
        }
      });
    }, (error) => {
      console.dir(error);
    });
  }
}
