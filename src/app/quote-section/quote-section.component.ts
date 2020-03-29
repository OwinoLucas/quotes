import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from "../quotes";

@Component({
  selector: 'app-quote-section',
  templateUrl: './quote-section.component.html',
  styleUrls: ['./quote-section.component.css']
})
export class QuoteSectionComponent implements OnInit {

  @Input() quotes: Quotes
  @Output() isDeleted = new EventEmitter<boolean>();

  quoteDelete(Deleted: boolean) {
    this.isDeleted.emit(Deleted)
  }

  constructor() { }

  ngOnInit() {
  }

}
