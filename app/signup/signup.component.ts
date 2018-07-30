import { Component, OnInit, ViewChild } from '@angular/core';
import { RemoteUser } from '~/signup/user-data-service';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular/dataform-directives';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  moduleId: module.id
})

export class SignupComponent implements OnInit {

  private _user: RemoteUser;
  @ViewChild('myCommitDataForm') myCommitDataFormComp: RadDataFormComponent;

  constructor(private _page: Page) {
  }

  ngOnInit() {
    this._user = new RemoteUser("", "", "", "", "", "", "", "", "", "", "", "", "", 0, 0, 0, true, );
  }
  
  get user(): RemoteUser {
    return this._user;
  }

  options_edu = ["Post Graduation", "Under Graduation ", "Graduation", "Matriculation", "Diploma"];

  onPropertyCommitted() {
    if (this.myCommitDataFormComp.dataForm.editedObject) {
        console.dir(this.myCommitDataFormComp.dataForm);
    }

  }

}
