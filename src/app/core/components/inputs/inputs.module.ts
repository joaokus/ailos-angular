import { NgModule } from "@angular/core";
import { InputCpfModule } from "./input-cpf/input-cpf.module";

@NgModule({
    imports: [
        InputCpfModule,
    ],
    exports: [
        InputCpfModule,
    ]
})
export class InputsModule {}