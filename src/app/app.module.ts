import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { from } from 'rxjs';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCreateComponent } from './views/users/user-create/user-create.component';
import { UserShowComponent } from './views/users/user-show/user-show.component';
import { UserUpdateComponent } from './views/users/user-update/user-update.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsersComponent } from './views/users/users/users.component';
import { OnboardingComponent } from './views/onboarding/onboarding.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SettingsComponent } from './views/settings/settings.component';
import { UserHomeComponent } from './views/user-home/user-home.component';
import { UserDashboardComponent } from './views/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    LoginComponent,
    UserCreateComponent,
    UserShowComponent,
    UserUpdateComponent,
    DashboardComponent,
    UsersComponent,
    OnboardingComponent,
    ProfileComponent,
    SettingsComponent,
    UserHomeComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
