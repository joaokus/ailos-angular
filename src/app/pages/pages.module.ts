import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ThemeModule } from "../core/components/theme/theme.module";
import { PagesRoutes } from "./pages-routing";
import { PagesComponent } from "./pages.component";

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        RouterModule.forChild(PagesRoutes)
    ],
    declarations: [PagesComponent],
})
export class PagesModule {}
