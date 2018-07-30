import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "~/login/login.component";
import { SignupComponent } from "~/signup/signup.component";
import { GettingStartedComponent } from "~/getting-started/getting-started.component";
import { DashboardComponent } from "~/dashboard/dashboard.component";
import { AccountComponent } from "~/account/account.component";
import { StatisticsComponent } from "~/statistics/statistics.component";
import { DashboardContentComponent } from "~/dashboard-content/dashboard-content.component";
import { ApplyForGoshaENasheenComponent } from "~/applyGoasha/applyGoasha.component";
import { AboutGoshaComponent } from "~/about-gosha/about-gosha.component";


const routes: Routes = [
    { path: "", redirectTo: "/getting-started", pathMatch: "full" },
    { path: "getting-started", component: GettingStartedComponent },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "about-gosha",component:ApplyForGoshaENasheenComponent },
    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: '', component: DashboardContentComponent },
            { path: 'account', component: AccountComponent },
            { path: 'about-gosha', component:AboutGoshaComponent },
            { path: 'statistics', component: StatisticsComponent },
            
        ]
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }