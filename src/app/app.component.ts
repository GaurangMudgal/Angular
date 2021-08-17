import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'API-Int';
  employees : any;
  showDet = false;

  //Reactive Form for adding new employee
  addEmployee = new FormGroup({
    id : new FormControl('', Validators.required),
    name : new FormControl('', Validators.required),
    company : new FormControl('', Validators.required)
  });

  //Reactive Form for updating employee details
  updateEmployee = new FormGroup({
    id : new FormControl('', Validators.required),
    name : new FormControl('', Validators.required),
    company : new FormControl('', Validators.required)
  });

  //Reactive Form for deleting employee
  delEmployee = new FormGroup({
    id : new FormControl('', Validators.required)
  });

  constructor(private httpClient : HttpClient) {  }

  //To fetch the all employees from server
  getDets() {
    this.httpClient.get("http://localhost:3000/home").subscribe(data => {
      this.employees = data;
      console.log(this.employees);
      this.showDet = true;
    })
  }

  //To hide the details displayed on the screen
  hideDets() {
    this.showDet = false;
  }

  //To add a new employee
  addEmp() {
    const emp = {
      id : this.addEmployee.get('id')?.value,
      name : this.addEmployee.get('name')?.value,
      company : this.addEmployee.get('company')?.value
    };
    this.httpClient.post("http://localhost:3000/home", emp).subscribe(data => {
      console.log("Employee added!");
    });
  }

  //To update details of employee using his/her id
  updateEmp() {
    const emp = {
      id : this.updateEmployee.get('id')?.value,
      name : this.updateEmployee.get('name')?.value,
      company : this.updateEmployee.get('company')?.value
    };
    this.httpClient.put("http://localhost:3000/home/"+this.updateEmployee.get('id')?.value, emp).subscribe(data => {
      console.log("Employee Details Updated!")
    });
  }

  //To delete an employee using his/her id
  delEmp() {
    this.httpClient.delete("http://localhost:3000/home/"+this.delEmployee.get('id')?.value).subscribe(data => {
      console.log("Employee Deleted!")
    });
  }

}
