import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengersCountComponent } from './passengers-count/passengers-count.component';
import { PassengersDetailsComponent } from './passengers-details/passengers-details.component';
import { PassengerService } from './shared/services/passengers.service';

@NgModule({
  declarations: [
    AppComponent,
    PassengersCountComponent,
    PassengersDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  // providers: [PassengerService],//service available throughout application single instance only
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

