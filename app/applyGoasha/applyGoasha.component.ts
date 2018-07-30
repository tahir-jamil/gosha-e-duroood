import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-applyGoasha',
  templateUrl: './applyGoasha.component.html',
  styleUrls: ['./applyGoasha.component.css'],
  moduleId:module.id
})
export class ApplyGoashaComponent implements OnInit {

  constructor(private _page: Page) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }
  
}
