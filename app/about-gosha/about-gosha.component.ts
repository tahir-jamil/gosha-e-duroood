import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-about-gosha',
  templateUrl: './about-gosha.component.html',
  styleUrls: ['./about-gosha.component.css'],
  moduleId:module.id,
})
export class AboutGoshaComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit() {
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
