import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employeeName: string;
  employeeAge: number;
  employeeSalary: number;
  errMsg = '';
  constructor(private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
  }

  addNewEmployee(params) {
    this.employeeService.addEmployee(params)
      .subscribe((res) => {
        console.log('res>>', res);
      });

    alert(`${this.employeeName}, ${this.employeeSalary}, ${this.employeeAge}`);
  }

  validate() {
    if (!this.employeeName) {
      this.errMsg = 'Please enter employee name';
    } else if (!this.employeeSalary) {
      this.errMsg = 'Please enter employee salary';
    } else if (!this.employeeAge) {
      this.errMsg = 'Please enter employee age';
    } else {
      this.errMsg = '';
      this.addNewEmployee({ name: this.employeeName, salary: this.employeeSalary, age: this.employeeAge });
    }
  }

}
