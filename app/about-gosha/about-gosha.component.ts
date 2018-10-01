import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { CommonService } from '~/data-services/common.service';

@Component({
  selector: 'app-about-gosha',
  templateUrl: './about-gosha.component.html',
  styleUrls: ['./about-gosha.component.css'],
  moduleId:module.id,
})
export class AboutGoshaComponent implements OnInit {

  constructor(private router: RouterExtensions,private _page: Page, private commonService: CommonService) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
    this.commonService.isAddCountsPage = false;

  }

  navigateTo(path) {
    this.router.navigate([path], {
      transition: {
        name: 'fade',
        curve: 'linear'
      }
    });
  }
}
