import {Component, Input, OnInit} from '@angular/core';
import {CardButtonDescDto} from "./CardButtonDescDto";

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.css']
})
export class CardButtonComponent implements OnInit {

  @Input()
  cardButtonDto: CardButtonDescDto = new class implements CardButtonDescDto {
    caption: string="";
    subCaption: string="";
    text: string="";
  };

  constructor() { }

  ngOnInit(): void {
  }

}
