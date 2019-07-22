import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeeComponent } from "./employee.component";
import { EmployeeService } from "./employee.service";
import { ManService } from "./man.service";

const simpleEmployee = {
  getPeople() {
    return new EmployeeService().getPeople();
  }
};

const value = new EmployeeService();
const simpleReturn = () => {
  return value.getPeople();
};

@NgModule({
  declarations: [EmployeeComponent],
  imports: [CommonModule],
  exports: [EmployeeComponent],
  providers: [
    {
      provide: EmployeeService,
      useValue: simpleEmployee //--> will use the value of object
    },
    {
      provide: ManService,
      useFactory: simpleReturn
    }
  ]
})
export class EmployeeModule {}
