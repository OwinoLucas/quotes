import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'L.O.Oading', 'Some niggas fade away,some niggas hit the jumper.', new Date(2020, 2, 12)),
    new Quotes(2, 'Kyrie Irving', 'Ball is life', new Date(2019, 12, 13))
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
  upVotes
  upVote(i: string | number) {
    this.upVotes[i].upVotes + 1;

  }
  downVotes
  downVote(i: string | number) {
    this.downVotes[i].downVotes + 1;
  }



  constructor() { }

  ngOnInit() {
  }

}