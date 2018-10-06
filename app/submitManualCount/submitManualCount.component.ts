import { Component, OnInit, ViewChild } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular/dataform-directives';
import { UserDataService } from '~/data-services/user-data.service';

@Component({
  selector: 'app-submitManualCount',
  templateUrl: './submitManualCount.component.html',
  styleUrls: ['./submitManualCount.component.css'],
  moduleId: module.id
})
export class SubmitManualCountComponent implements OnInit {

  
  signUpForm;
  // private _user: RemoteUser;
  @ViewChild('myCommitDataForm') myCommitDataFormComp: RadDataFormComponent;
  constructor(private userDataService: UserDataService) {
  }

  ngOnInit(): void {
  }

  onLoaded() {

  }

  counts = {
    duroodCount: "",
    party_id: this.userDataService.user.id,
  };

  onPropertyCommitted() {
    if (this.myCommitDataFormComp.dataForm.editedObject) {
      this.signUpForm = this.myCommitDataFormComp.dataForm.editedObject;
    }
  }

  submitForm() {
    console.log("submit form");
    this.userDataService.postData(this.signUpForm).subscribe(res => {
      console.dir(res);
    }, (error) => {
      console.dir(error);
    });
  }

}
