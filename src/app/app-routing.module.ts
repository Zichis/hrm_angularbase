import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { LoginComponent} from './views/login/login.component';
import { AuthGuard } from "./guards/auth.guard";
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { OnboardingComponent } from './views/onboarding/onboarding.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SettingsComponent } from './views/settings/settings.component';
import { UserHomeComponent } from './views/user-home/user-home.component';
import { UserDashboardComponent } from './views/user-dashboard/user-dashboard.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AdminGuard } from './guards/admin.guard';
import { AttendanceComponent } from './views/attendance/attendance.component';
import { UserAttendanceComponent } from './views/user-attendance/user-attendance.component';
import { UserSettingsComponent } from './views/user-settings/user-settings.component';
import { EventComponent } from './views/event/event.component';
import { DepartmentComponent } from './views/department/department.component';
import { DepartmentCreateComponent } from './views/department-create/department-create.component';
import { DepartmentShowComponent } from './views/department-show/department-show.component';
import { DepartmentUpdateComponent } from './views/department-update/department-update.component';

const routes: Routes = [
  {path: 'admin', component: HomeComponent, canActivate: [AuthGuard, AdminGuard], children: [
    {path: '', component: DashboardComponent},
    {path: 'users', loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule)},
    {path: 'settings', component: SettingsComponent},
    {path: 'attendance', component: AttendanceComponent},
    {path: 'events', component: EventComponent},
    {path: 'departments', children: [
      {path: '', component: DepartmentComponent},
      {path: 'create', component: DepartmentCreateComponent},
      {path: ':id/edit', component: DepartmentUpdateComponent},
      {path: ':id', component: DepartmentShowComponent}
    ]},
  ]},
  {path: '', component: UserHomeComponent, canActivate: [AuthGuard], children: [
    {path: '',   redirectTo: 'dashboard', pathMatch: 'full' },
    {path: 'profile', component: ProfileComponent},
    {path: 'attendance', component: UserAttendanceComponent},
    {path: 'dashboard', component: UserDashboardComponent},
    {path: 'settings', component: UserSettingsComponent}
  ]},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'onboarding', component: OnboardingComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
