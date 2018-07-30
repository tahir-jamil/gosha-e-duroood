import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css'],
  moduleId: module.id
})
export class GettingStartedComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

  
  navigateTo(path) {
    this.routerExtensions.navigate([path], {
      transition: {
        name: 'fade',
        curve: 'linear'
      }
    });
  }

}
