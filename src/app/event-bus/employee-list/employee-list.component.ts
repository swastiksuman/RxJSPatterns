import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/model/employee.model';
import { globalEventBus, Observer, EMPLOYEE_LIST_AVAILABLE } from '../event-bus';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, Observer {
  employeeList: Employee[];
  constructor() {
    globalEventBus.registerObserver(EMPLOYEE_LIST_AVAILABLE, this);
   }

  ngOnInit() {

  }

  notify(data: Employee[]) {
    this.employeeList = data;
  }
}
