import { Component, OnInit } from '@angular/core';
import { globalEventBus } from './event-bus';
import { employeeList } from './../shared/model/employee-list';

@Component({
  selector: 'app-event-bus',
  templateUrl: './event-bus.component.html',
  styleUrls: ['./event-bus.component.css']
})
export class EventBusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    globalEventBus.notifyObserver(employeeList);
  }

}
