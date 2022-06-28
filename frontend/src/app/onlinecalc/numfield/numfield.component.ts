import { Component, OnInit } from '@angular/core';
import {NumFieldValue} from "./NumFieldValue";

@Component({
  selector: 'app-numfield',
  templateUrl: './numfield.component.html',
  styleUrls: ['./numfield.component.css']
})
export class NumfieldComponent implements OnInit {

  numfieldValues: NumFieldValue[] = [
    {
      value: "",
      caption: "",
      row: 0,
      column: 0
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
