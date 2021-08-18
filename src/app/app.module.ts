import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddEmpComponent } from './myComps/add-emp/add-emp.component';
import { UpdateEmpComponent } from './myComps/update-emp/update-emp.component';
import { DelEmpComponent } from './myComps/del-emp/del-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    UpdateEmpComponent,
    DelEmpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
