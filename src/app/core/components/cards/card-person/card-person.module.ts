import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardPersonComponent } from "./card-person.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [CardPersonComponent],
    exports: [CardPersonComponent],
})
export class CardPersonModule {}