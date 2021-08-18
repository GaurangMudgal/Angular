import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  //Reactive Form for updating employee details
  updateEmployee = new FormGroup({
    id : new FormControl('', Validators.required),
    name : new FormControl('', Validators.required),
    company : new FormControl('', Validators.required)
  });

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

}
