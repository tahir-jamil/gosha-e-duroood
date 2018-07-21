import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-apply-goasha-e-nasheen',
  templateUrl: './apply-goasha-e-nasheen.component.html',
  styleUrls: ['./apply-goasha-e-nasheen.component.css'],
  moduleId:module.id
})
export class ApplyGoashaENasheenComponent implements OnInit {

  constructor(private _page: Page) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }
  

}
