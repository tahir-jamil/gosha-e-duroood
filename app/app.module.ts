import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { LoginComponent } from "~/login/login.component";


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

import { SignupComponent } from './signup/signup.component';
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUISideDrawerModule  } from "nativescript-ui-sidedrawer/angular";
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ApplyGoashaENasheenComponent } from './apply-goasha-e-nasheen/apply-goasha-e-nasheen.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';

@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      NativeScriptModule,
      AppRoutingModule,
      NativeScriptUIDataFormModule,
      NativeScriptUISideDrawerModule
   ],
   declarations: [
      AppComponent,
      LoginComponent,
      SignupComponent,
      GettingStartedComponent,
      DashboardComponent,
      AccountComponent,
      StatisticsComponent,
      ApplyGoashaENasheenComponent,
      DashboardContentComponent
   ],
   providers: [],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
