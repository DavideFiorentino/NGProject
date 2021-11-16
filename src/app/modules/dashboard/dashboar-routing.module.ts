import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationGuard } from "@app/core/auth.guard";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [ AuthenticationGuard ]
    }
];

@NgModule({
    imports: [
       RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})


export class DashboardRoutingModule {}