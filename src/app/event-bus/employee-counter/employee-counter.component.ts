import { Component, OnInit } from '@angular/core';
import { globalEventBus, EMPLOYEE_LIST_AVAILABLE, ADD_NEW_EMPLOYEE } from '../event-bus';
import { Employee } from '../../shared/model/employee.model';

@Component({
  selector: 'app-employee-counter',
  templateUrl: './employee-counter.component.html',
  styleUrls: ['./employee-counter.component.css']
})
export class EmployeeCounterComponent implements OnInit {

  employeeCounter = 0;

  constructor() {
    globalEventBus.registerObserver(EMPLOYEE_LIST_AVAILABLE, this);
    globalEventBus.registerObserver(ADD_NEW_EMPLOYEE, {
      notify: employeeName => this.employeeCounter += 1
    });
   }

  ngOnInit() {
  }

  notify(data: Employee[]){
    this.employeeCounter = data.length;
  }
}
