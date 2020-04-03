import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(3, 'Lucas Otieno', 'Heros come and go but legends live forever', 'Kobe Bryant', new Date(2020, 2, 12)),
    new Quotes(2, 'MCkenzie_02', 'Ball is life', 'Kyrie Irving', new Date(2019, 12, 13)),
    new Quotes(1, 'Shailo_Reeves', 'Some niggas fade away,some niggas hit the jumper.', 'Lil Wayne', new Date(2019, 0, 26))
  ];

  quoteDelete(isDeleted, i) {
    if (isDeleted) {
      let toDelete = confirm('Are you sure you want to delete ${this.quote[index].userName}?')
      if (toDelete) {
        this.quotes.splice(i, 1)
      }
    }
  }

  addNewQuote(quotes) {
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength + 1;
    quotes.timePosted = new Date(quotes.timePosted)
    this.quotes.push(quotes)
  }




  constructor() { }

  ngOnInit() {
  }

}