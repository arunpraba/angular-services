import { NgModule } from "@angular/core";
import { PeopleService } from "./people.service";
import { CommonModule } from "@angular/common";
import { PeopleComponent } from "./people.component";
import { InventorsService } from "./inventors.service";

@NgModule({
  declarations: [PeopleComponent],
  imports: [CommonModule],
  exports: [PeopleComponent],
  providers: [
    InventorsService,
    {
      provide: PeopleService,
      useExisting: InventorsService //--> will overwrite the existing
      // useClass: PeopleService -->will create new instance
    }
  ]
})
export class PeopleModule {}
