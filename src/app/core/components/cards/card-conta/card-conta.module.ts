import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardContaComponent } from "./card-conta.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [CardContaComponent],
    exports: [CardContaComponent],
})
export class CardContaModule {}