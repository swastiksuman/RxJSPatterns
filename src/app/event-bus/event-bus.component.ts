import { Component, OnInit } from '@angular/core';
import { globalEventBus } from './event-bus';
import { employeeList } from './../shared/model/employee-list';
import { EMPLOYEE_LIST_AVAILABLE } from './event-bus';

@Component({
  selector: 'app-event-bus',
  templateUrl: './event-bus.component.html',
  styleUrls: ['./event-bus.component.css']
})
export class EventBusComponent implements OnInit {
  newEmployee: string;

  constructor() { }

  ngOnInit() {
    globalEventBus.notifyObserver(EMPLOYEE_LIST_AVAILABLE, employeeList.slice(0));
  }

  onAdd(){
    console.log('onAdd');
    employeeList.push({
      id: Math.floor(Math.random() * 100),
      name: this.newEmployee,
      designation: 'Clerk'
    });
    globalEventBus.notifyObserver(EMPLOYEE_LIST_AVAILABLE, employeeList.slice(0));
    this.newEmployee = '';
  }

}
