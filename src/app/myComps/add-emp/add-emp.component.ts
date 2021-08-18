import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  //Reactive Form for adding new employee
  addEmployee = new FormGroup({
    id : new FormControl('', Validators.required),
    name : new FormControl('', Validators.required),
    company : new FormControl('', Validators.required)
  });

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

}
