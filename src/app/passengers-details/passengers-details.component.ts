import { Component, Input, OnInit } from '@angular/core';
import { Ichild, Ipassenger } from '../shared/model/data';
import { PassengerService } from '../shared/services/passengers.service';

@Component({
  selector: 'app-passengers-details',
  templateUrl: './passengers-details.component.html',
  styleUrls: ['./passengers-details.component.scss']
})
export class PassengersDetailsComponent implements OnInit {
 @Input() pDetails! : Ipassenger;
  constructor() { }

  ngOnInit(): void {
   
  }

}
