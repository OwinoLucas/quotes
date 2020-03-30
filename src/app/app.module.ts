import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteSectionComponent } from './quote-section/quote-section.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { TimePipe } from './time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteSectionComponent,
    QuotesFormComponent,
    TimePipe,
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