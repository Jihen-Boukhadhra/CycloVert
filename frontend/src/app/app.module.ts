import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTrashComponent } from './add-trash/add-trash.component';
import { CommentsComponent } from './comments/comments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RapportComponent } from './rapport/rapport.component';
import { ReceiversComponent } from './receivers/receivers.component';
import { RegisterComponent } from './register/register.component';
import { TrashListComponent } from './trash-list/trash-list.component';
import { ChartComponent } from './utils/chart/chart.component';
import { Chart2Component } from './utils/chart2/chart2.component';
import { SidebarComponent } from './utils/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTrashComponent,
    CommentsComponent,
    DashboardComponent,
    LandingPageComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    RapportComponent,
    ReceiversComponent,
    RegisterComponent,
    TrashListComponent,
    ChartComponent,
    Chart2Component,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
