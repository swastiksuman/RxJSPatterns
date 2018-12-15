import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/model/employee.model';
import { globalEventBus, Observer } from '../event-bus';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, Observer {
  employeeList: Employee[];
  constructor() {
    globalEventBus.registerObserver(this);
   }

  ngOnInit() {

  }

  notify(data: Employee[]) {
    this.employeeList = data;
  }
}
