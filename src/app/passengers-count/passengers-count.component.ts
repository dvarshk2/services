import { Component, OnInit } from '@angular/core';
import { Ipassenger } from '../shared/model/data';
import { PassengerService } from '../shared/services/passengers.service';

@Component({
  selector: 'app-passengers-count',
  templateUrl: './passengers-count.component.html',
  styleUrls: ['./passengers-count.component.scss']
})
export class PassengersCountComponent implements OnInit {
  // passengerServ !: PassengerService;
  passengerData! : Ipassenger[];
  pCount !: number;
  checkInCount! : number;
  constructor(private passengerServ : PassengerService) { }

  ngOnInit(): void {
    // this.passengerServ = new PassengerService();
    this.passengerData = this.passengerServ.getPassengers();
    this.pCount = this.passengerData.length;
    console.log(this.pCount);
    this.checkInCount = this.passengerData.filter(pass => pass.checkedIn === true).length;
  }

}
