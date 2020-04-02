import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteSectionComponent } from './quote-section/quote-section.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { TimePipe } from './time.pipe';
import { VotesComponent } from './votes/votes.component';
import { HighlighDirective } from './highligh.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteSectionComponent,
    QuotesFormComponent,
    TimePipe,
    VotesComponent,
    HighlighDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
