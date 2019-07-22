import { Component, SkipSelf, Host, Optional } from "@angular/core";
import {InventorService} from './inventor.service'

@Component({
  selector: "app-inventor",
  providers:[InventorService]
  template: `
    <div class="app-inventor">
      <h3>The Inventor</h3>
      <ul>
        <li *ngFor="let i of inventor">{{ i.first + " " + i.last }}</li>
      </ul>
    </div>
  `
})
export class InventorComponent {
  inventor = [];

  constructor(
    //@SkipSelf(), // it will skip dependency check in component level
  @Host() // it will check dependency in component level
@Optional()
  private inventorService:InventorService) {
    this.inventor = this.inventorService.getPeople()
  }
}
