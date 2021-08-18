import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-del-emp',
  templateUrl: './del-emp.component.html',
  styleUrls: ['./del-emp.component.css']
})
export class DelEmpComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  //Reactive Form for deleting employee
  delEmployee = new FormGroup({
    id : new FormControl('', Validators.required)
  });

  //To delete an employee using his/her id
  delEmp() {
    this.httpClient.delete("http://localhost:3000/home/"+this.delEmployee.get('id')?.value).subscribe(data => {
      console.log("Employee Deleted!")
    });
  }

}
