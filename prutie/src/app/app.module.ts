import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NotificationService } from "./shared/notification.service";
import { MyFireService } from "./shared/myfire.service";
import { UserService } from "./shared/user.service";
import {RouteGuard} from "./auth/route-guard";
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RouteGuard, NotificationService, MyFireService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
