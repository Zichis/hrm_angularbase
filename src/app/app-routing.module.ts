import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { LoginComponent} from './views/login/login.component';
import { UserCreateComponent } from './views/users/user-create/user-create.component';
import { UserShowComponent } from './views/users/user-show/user-show.component';
import { UserUpdateComponent } from "./views/users/user-update/user-update.component";
import { AuthGuard } from "./guards/auth.guard";
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsersComponent } from './views/users/users/users.component';
import { OnboardingComponent } from './views/onboarding/onboarding.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SettingsComponent } from './views/settings/settings.component';
import { UserHomeComponent } from './views/user-home/user-home.component';
import { UserDashboardComponent } from './views/user-dashboard/user-dashboard.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {'path': 'admin', component: HomeComponent, canActivate: [AuthGuard, AdminGuard], children: [
    {'path': '', component: DashboardComponent},
    {'path': 'users', component: UsersComponent},
    {'path': 'users/create', component: UserCreateComponent},
    {'path': 'users/:id', component: UserShowComponent, canActivate: [AuthGuard]},
    {'path': 'users/:id/edit', component: UserUpdateComponent, canActivate: [AuthGuard]},
    {'path': 'settings', component: SettingsComponent},
  ]},
  {'path': '', component: UserHomeComponent, canActivate: [AuthGuard], children: [
    {'path': '',   redirectTo: 'dashboard', pathMatch: 'full' },
    {'path': 'profile', component: ProfileComponent},
    {'path': 'dashboard', component: UserDashboardComponent}
  ]},
  {'path': 'welcome', component: WelcomeComponent},
  {'path': 'onboarding', component: OnboardingComponent},
  {'path': 'login', component: LoginComponent},
  {'path': '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
