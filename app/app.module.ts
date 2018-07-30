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
import { NativeScriptUIChartModule  } from "nativescript-ui-chart/angular";
import { NativeScriptUIListViewModule  } from "nativescript-ui-listview/angular";
import { GettingStartedComponent } from './getting-started/getting-started.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { ApplyGoashaComponent } from './applyGoasha/applyGoasha.component';
import { PagerModule } from "nativescript-pager/angular";

@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      NativeScriptModule,
      AppRoutingModule,
      NativeScriptUIDataFormModule,
      NativeScriptUISideDrawerModule,
      NativeScriptUIListViewModule,
      NativeScriptUIChartModule,
      PagerModule
   ],
   declarations: [
      AppComponent,
      LoginComponent,
      SignupComponent,
      GettingStartedComponent,
      DashboardComponent,
      AccountComponent,
      StatisticsComponent,
      DashboardContentComponent,
      ApplyGoashaComponent
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
