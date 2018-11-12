import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(e) {
    console.log("Event ::: ", e, e.currentTarget.parentElement.previousElementSibling);
    let contentWrapper = e.currentTarget.parentElement;
    let sideMenu = e.currentTarget.parentElement.previousElementSibling;
    contentWrapper.classList.contains("expand") ? sideMenu.classList.remove('collapse') : sideMenu.classList.add('collapse');
    contentWrapper.classList.contains("expand") ? contentWrapper.classList.remove('expand') : contentWrapper.classList.add('expand');
  }
}
