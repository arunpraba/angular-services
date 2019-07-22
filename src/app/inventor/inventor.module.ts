import { NgModule } from "@angular/core";
import { PeopleService } from "./people.service";
import { CommonModule } from "@angular/common";
import { InventorComponent } from "./inventor.component";

@NgModule({
  declarations: [InventorComponent],
  imports: [CommonModule],
  exports: [InventorComponent]
})
export class InventorModule {}
