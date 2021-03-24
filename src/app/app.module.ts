import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { from } from 'rxjs';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsersComponent } from './views/users/users/users.component';
import { OnboardingComponent } from './views/onboarding/onboarding.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SettingsComponent } from './views/settings/settings.component';
import { UserHomeComponent } from './views/user-home/user-home.component';
import { UserDashboardComponent } from './views/user-dashboard/user-dashboard.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AttendanceComponent } from './views/attendance/attendance.component';
import { UserAttendanceComponent } from './views/user-attendance/user-attendance.component';
import { UserSettingsComponent } from './views/user-settings/user-settings.component';
import { AlertComponent } from './views/shared/alert/alert.component';
import { EventComponent } from './views/event/event.component';
import { DepartmentComponent } from './views/department/department.component';
import { SideMenuComponent } from './views/shared/side-menu/side-menu.component';
import { UserSideMenuComponent } from './views/shared/user-side-menu/user-side-menu.component';
import { DepartmentCreateComponent } from './views/department-create/department-create.component';
import { DepartmentShowComponent } from './views/department-show/department-show.component';
import { DepartmentUpdateComponent } from './views/department-update/department-update.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    OnboardingComponent,
    ProfileComponent,
    SettingsComponent,
    UserHomeComponent,
    UserDashboardComponent,
    PageNotFoundComponent,
    AttendanceComponent,
    UserAttendanceComponent,
    UserSettingsComponent,
    AlertComponent,
    EventComponent,
    DepartmentComponent,
    SideMenuComponent,
    UserSideMenuComponent,
    DepartmentCreateComponent,
    DepartmentShowComponent,
    DepartmentUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
