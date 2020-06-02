import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeList;
  employeeId: any;
  employeeName: string;
  employeeAge: number;
  employeeSalary: number;
  loading = false;
  errMsg: string;
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.loading = true;
    this.employeeService.getEmployeeList()
      .subscribe((res) => {
        this.loading = false;
        this.employeeList = res.data;
      }, () => {
        this.loading = false;
      });
  }

  getEmployeeId(id) {
    this.employeeId = id;
  }

  validate(id) {
    if (!this.employeeName) {
      this.errMsg = 'Please enter employee name';
    } else if (!this.employeeSalary) {
      this.errMsg = 'Please enter employee salary';
    } else if (!this.employeeAge) {
      this.errMsg = 'Please enter employee age';
    } else {
      this.errMsg = '';
      this.updateEmployee(id);
    }
  }

  updateEmployee(id) {

    const params = {
      name: this.employeeName,
      salary: this.employeeSalary,
      age: this.employeeAge
    };

    this.employeeService.updateEmployee(params, id)
      .subscribe((res) => {
        this.getEmployeeList();
        console.log(res);
      }, (err) => {

      });

  }

  deleteEmployee(id) {
    this.employeeService.deleteEmployee(id)
      .subscribe((res) => {

      }, () => {

      });
  }
}

