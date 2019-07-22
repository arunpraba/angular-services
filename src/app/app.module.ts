import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PeopleModule } from "./people/people.module";
import { EmployeeModule } from "./employee/employee.module";
import { InventorModule } from "./inventor/inventor.module";

@NgModule({
  imports: [
    BrowserModule,
    InventorModule,
    EmployeeModule,
    PeopleModule,
    FormsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
