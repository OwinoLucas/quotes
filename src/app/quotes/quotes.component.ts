import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'L.O.Oading', 'Some niggas fade away,some niggas hit the jumper.', new Date(2020, 3, 12)),
    new Quotes(2, 'Kyrie Irving', 'Ball is life', new Date(2012, 12, 13))
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
    this.quotes.push(quotes)
  }

  upVotes: number = 0;
  upVote() {
    this.upVotes = this.upVotes + 1;

  }
  downVotes: number = 0;
  downVote() {
    this.downVotes = this.downVotes + 1;
  }



  constructor() { }

  ngOnInit() {
  }

}
