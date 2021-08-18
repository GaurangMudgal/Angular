import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'API-Int';
  employees : any;
  showDet = false;

  //Some custom variables related to MENU display
  showAdd = false;
  showUpdate = false;
  showDelete = false;

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
  
  //Functions for implementing the MENU Logic
  disAdd() {
    this.showAdd = !this.showAdd;
    this.showUpdate = false;
    this.showDelete = false;
  }

  disUpdate() {
    this.showUpdate = !this.showUpdate;
    this.showAdd = false;
    this.showDelete = false;
  }

  disDelete() {
    this.showDelete = !this.showDelete;
    this.showAdd = false;
    this.showUpdate = false;
  }

}
