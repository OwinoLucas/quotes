import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    { id: 1, userName: 'L.O.Oading', quoteSection: 'Some niggas fade away,some niggas hit the jumper.' },
    { id: 2, userName: 'Kyrie Irving', quoteSection: 'Ball is life' }
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
