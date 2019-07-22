import { Component } from "@angular/core";
import { PeopleService } from "./people.service";

@Component({
  selector: "app-people",
  template: `
    <div class="app-people">
      <h3>The People</h3>
      <ul>
        <li *ngFor="let i of inventor">{{ i.first + " " + i.last }}</li>
      </ul>
    </div>
  `
})
export class PeopleComponent {
  inventor = [];

  constructor(private peopleService: PeopleService) {
    this.inventor = this.peopleService.getPeople();
  }
}
