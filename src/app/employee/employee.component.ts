import { Component } from "@angular/core";
import { EmployeeService } from "./employee.service";
import { ManService } from "./man.service";

@Component({
  selector: "app-emp",
  template: `
    <div class="app-emp">
      <h3>The Employee</h3>
      <ul>
        <li *ngFor="let i of inventor">{{ i.first + " " + i.last }}</li>
      </ul>
      <h3>The Man</h3>
      <ul>
        <li *ngFor="let i of men">{{ i.first + " " + i.last }}</li>
      </ul>
    </div>
  `
})
export class EmployeeComponent {
  inventor = [];
  men = [];

  constructor(
    private empService: EmployeeService,
    private manService: ManService
  ) {
    this.inventor = this.empService.getPeople();
    this.men = this.manService;
  }
}
