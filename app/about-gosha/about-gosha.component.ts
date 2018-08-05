import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-about-gosha',
  templateUrl: './about-gosha.component.html',
  styleUrls: ['./about-gosha.component.css'],
  moduleId:module.id,
})
export class AboutGoshaComponent implements OnInit {

  constructor(private router: RouterExtensions,private _page: Page) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
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
