import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StepperComponent } from "./stepper.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [StepperComponent],
    exports: [StepperComponent],
})
export class StepperModule { }