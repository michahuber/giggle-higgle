import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sharedien-qm';
  isSidebarToggled: boolean = true;

  constructor() { }

  toggleSidebar() {
    this.isSidebarToggled = !this.isSidebarToggled;
  }
}
