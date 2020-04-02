import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  upVote = 0
  downVote = 0;
  upVotes() {
    this.upVote = this.upVote + 1
  }
  downVotes() {
    this.downVote = this.downVote + 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
