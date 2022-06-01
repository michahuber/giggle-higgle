import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  isSidebarToggled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isSidebarToggled = !this.isSidebarToggled;
  }

}
