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
  private _user = {
    name: "goasha",
    fatherName: "goasha",
    postalAddress: "goasha",
    union_council: "goasha",
    Tehsil: "goasha",
    city: "goasha",
    district: "goasha",
    provience: "goasha",
    country: "goasha",
    education: "goasha",
    profession: "goasha",
    dob: "goasha",
    nic: "goasha",
    email: "goasha",
    phoneRes: "goasha",
    phoneOff: "goasha",
    phoneCell: "goasha",
    holyQuran: "1",
    ashra: "goasha",
    updated_at: "2018-10-18 09:54:49",
    created_at: "2018-10-18 09:54:49",
    id: 1
};
  signUpForm : any;
  
  constructor(private routerExtensions: RouterExtensions, private _page: Page, private commonService: CommonService, private userDataService: UserDataService) {
  }

  public showSuccess() {
    TNSFancyAlert.showSuccess("Successful", "You Have successfully Apply for Gosha nasheen", "navigateTo('/dashboard')");
  }

  public showError() {
    TNSFancyAlert.showError("Error!", "Oh no, something went wrong.", "Dismiss");
  }

  ngOnInit() {
    // this._user = new Goshaenasheen("data","data","data",0,0,0,false,"data","data","data","data","data","data","data","data","data","data","data",false,"data" );
    this._page.actionBarHidden = true;
    this.commonService.isAddCountsPage = false;

  }

  get user() {
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
    this.userDataService.postGoasha(this.signUpForm).subscribe(res => {
      console.dir(res);
     this.routerExtensions.back();
    }, (error) => {
      console.dir(error);
    });
  }
}

