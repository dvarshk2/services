import { Component, OnInit } from '@angular/core';
import { Ipassenger } from './shared/model/data';
import { PassengerService } from './shared/services/passengers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [PassengerService] // instance available within app and its child                  component only not available troughout appliacetion
})
export class AppComponent implements OnInit{
   title = 'services';
  // passengerServ !: PassengerService;
  passengerData! : Ipassenger[]

  constructor(private passengerServ : PassengerService){}
  ngOnInit(): void {
  //  this.passengerServ = new PassengerService();//instance of PassengerService class
   this.passengerData = this.passengerServ.getPassengers(); // get data from instance
   console.log(this.passengerData);
   
  }
}
