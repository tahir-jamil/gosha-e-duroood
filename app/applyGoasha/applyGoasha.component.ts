import { Component, OnInit, ViewChild } from '@angular/core';
import { Goshaenasheen } from "~/data-services/user";
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { TNSFancyAlert } from "nativescript-fancyalert";
import { CommonService } from '~/data-services/common.service';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular/dataform-directives';
import { UserDataService } from '~/data-services/user-data.service';
import { SelectedIndexChangedEventData } from "nativescript-drop-down";

@Component({
  selector: 'app-applyGoasha',
  templateUrl: './applyGoasha.component.html',
  styleUrls: ['./applyGoasha.component.css'],
  moduleId: module.id,
})
export class ApplyForGoshaENasheenComponent implements OnInit {
  private _user: Goshaenasheen;
  public selectedIndex = 0;
  public items: Array<string>;
  
  
  signUpForm = {
    
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
  goshaenasheen = {
    
    username: "",
    name:"",
    email: "",
    password: "",
    fatherName: "",
    nic: "",
    dateOfBirth: "",
    unionCouncil:"",
    tehseel:"",
    city: "",
    district: "",
    provience: "",
    country: "",
    phoneRes: "",
    phoneOff: "",
    phoneCell: "",
    holyQuran: "",
    education: "",
    profession: "",
    ashra:"",
    postalAddress: "",
  };

  options_edu = ["Matriculation", "Diploma", "Intermediate", "Undergraduate", "Graduate","Postgraduate"];
  ashra = ["first", "Second", "Third"];
  
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
    console.log(this.goshaenasheen);
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
  public onchange(args: SelectedIndexChangedEventData) {
    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
    this.goshaenasheen.education = this.options_edu[args.newIndex];
    this.goshaenasheen.ashra= this.ashra[args.newIndex];
  }
}
