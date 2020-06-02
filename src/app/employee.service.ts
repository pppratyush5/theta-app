import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  endPoint = 'http://dummy.restapiexample.com/api';
  version = 'v1';

  constructor(private httpClient: HttpClient) {

  }


  public getEmployeeList() {
    return this.httpClient.get(this.endPoint + '/' + this.version + '/employees');
  }

  public addEmployee(params) {
    return this.httpClient.post(this.endPoint + '/' + this.version + '/create', params);
  }

  public deleteEmployee(id) {
    return this.httpClient.delete(this.endPoint + '/' + this.version + '/delete/' + id);
  }

  public updateEmployee(params, id) {
    return this.httpClient.put(this.endPoint + '/' + this.version + '/update/' + id, params);
  }
}
