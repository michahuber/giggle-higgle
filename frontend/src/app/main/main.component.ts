import {Component, OnInit} from '@angular/core';
import {CardButtonDescDto} from "./card-button/CardButtonDescDto";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cardButtonDtos: CardButtonDescDto[] = [
    {
      caption: "Online-Calculator",
      subCaption: "Zum Rechnen und so",
      text: "Ein Rechner zum Rechnen. Klingt logisch oder?"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
