import { Component, OnInit } from '@angular/core';
import { Goshaenasheen } from '~/Apply-for-GoshaENasheen/goshaenasheen';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-Apply-for-GoshaENasheen',
  templateUrl: './Apply-for-GoshaENasheen.component.html',
  styleUrls: ['./Apply-for-GoshaENasheen.component.css'],
  moduleId:module.id,
})
export class ApplyForGoshaENasheenComponent implements OnInit {
  private _user: Goshaenasheen;
  constructor(private _page: Page) {
  }

  ngOnInit() {
    this._user = new Goshaenasheen( "","","","","","","","","","","","",0,0,0,true,true,"");
  }
  get user(): Goshaenasheen {
    return this._user;
  }
  options_edu=["Post Graduation", "Under Graduation ","Graduation", "Matriculation","Diploma" ];
  options_ashra=["first","Second","Third" ];

}
