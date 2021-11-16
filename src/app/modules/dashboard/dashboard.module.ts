import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { DashboardRoutingModule } from "./dashboar-routing.module";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        SharedModule,
        DashboardRoutingModule
    ]
})


export class DashboardModule {}