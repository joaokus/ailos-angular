import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DirectivesModule } from "src/app/core/directives/directives.module";
import { InputCpfComponent } from "./input-cpf.component";
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectivesModule,
        NgxMaskModule.forRoot(),
    ],
    declarations: [InputCpfComponent],
    exports: [InputCpfComponent],
})
export class InputCpfModule {}