import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MenuItem} from "./MenuItem";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {

  @Input()
  isToggled: boolean = false;

  @Output()
  isToggledChange: EventEmitter<any> = new EventEmitter<any>();

  menuItems: Array<MenuItem> = [
    {name: "Online-Calculator", icon:"calculate"},
    {name: "Example-Shop", icon:"shopping_cart"},
    {name: "Close", icon:"close"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.isToggled);
  }

}
