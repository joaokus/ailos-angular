import { NgModule } from "@angular/core";
import { CardContaModule } from "./card-conta/card-conta.module";
import { CardPersonModule } from "./card-person/card-person.module";

@NgModule({
    imports: [
        CardPersonModule,
        CardContaModule,
    ],
    exports: [
        CardPersonModule,
        CardContaModule,
    ],
})
export class CardsModule {}