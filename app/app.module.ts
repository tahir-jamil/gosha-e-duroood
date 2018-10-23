import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { YoutubePlayerModule } from 'nativescript-youtubeplayer/angular';
import { AppRoutingModule } from "~/app.routing";
import { AppComponent } from "~/app.component";
import { LoginComponent } from "~/login/login.component";
// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
import "nativescript-localstorage";
import { SignupComponent } from '~/signup/signup.component';
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular/dataform-directives";
import { NativeScriptUISideDrawerModule  } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { NativeScriptUIChartModule  } from "nativescript-ui-chart/angular/chart-directives";
import { NativeScriptUIListViewModule  } from "nativescript-ui-listview/angular/listview-directives";
import { GettingStartedComponent } from '~/getting-started/getting-started.component';
import { DashboardComponent } from '~/dashboard/dashboard.component';
import { StatisticsComponent } from '~/statistics/statistics.component';
import { DashboardContentComponent } from '~/dashboard-content/dashboard-content.component';
import { PagerModule } from "nativescript-pager/angular";
import { ApplyForGoshaENasheenComponent } from "~/applyGoasha/applyGoasha.component";
import { AboutGoshaComponent } from "~/about-gosha/about-gosha.component";
import { SubmitDuroodComponent } from './submitDurood/submitDurood.component';
import { CounterdaroodComponent } from './counterdarood/counterdarood.component';
import { DropDownModule } from "nativescript-drop-down/angular";
import { UserDataService } from "~/data-services/user-data.service";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { CommonService } from "~/data-services/common.service";


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
      PagerModule,
      YoutubePlayerModule,
      DropDownModule,
      NativeScriptFormsModule,
      NativeScriptHttpClientModule
   ],
   declarations: [
      AppComponent,
      LoginComponent,
      SignupComponent,
      GettingStartedComponent,
      DashboardComponent,
      StatisticsComponent,
      DashboardContentComponent,
      ApplyForGoshaENasheenComponent,
      AboutGoshaComponent,
      SubmitDuroodComponent,
      CounterdaroodComponent,
   ],
   providers: [
      UserDataService,
      CommonService
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
