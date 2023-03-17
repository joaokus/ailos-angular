import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderModule } from "./header/header.module";
import { SidebarModule } from "./sidebar/sidebar.module";

@NgModule({
    imports: [
        CommonModule,
        SidebarModule,
        HeaderModule,
    ],
    exports: [
        SidebarModule,
        HeaderModule,
    ],
})
export class ThemeModule {}