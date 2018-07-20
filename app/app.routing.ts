import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "~/login/login.component";
import { SignupComponent } from "~/signup/signup.component";
import { GettingStartedComponent } from "~/getting-started/getting-started.component";
import { ApplyForGoshaENasheenComponent } from "~/Apply-for-GoshaENasheen/Apply-for-GoshaENasheen.component";


const routes: Routes = [
    { path: "", redirectTo: "/getting-started", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "getting-started", component: GettingStartedComponent },
    {path: "Apply-for-GoshaENasheen",component:ApplyForGoshaENasheenComponent},
 
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }