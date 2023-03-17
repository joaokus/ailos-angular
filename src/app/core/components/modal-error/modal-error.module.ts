import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgmBootstrapModalModule } from "ngm-bootstrap-modal";
import { ModalErrorComponent } from "./modal-error.component";

@NgModule({
    imports: [
        CommonModule,
        NgmBootstrapModalModule,
    ],
    declarations: [ModalErrorComponent],
    exports: [ModalErrorComponent]
})
export class ModalErrorModule {}
