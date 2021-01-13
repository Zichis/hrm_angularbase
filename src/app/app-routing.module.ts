import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent} from './login/login.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UserUpdateComponent } from "./user-update/user-update.component";
import { AuthGuard } from "./auth.guard";
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {'path': '', component: HomeComponent, canActivate: [AuthGuard], children: [
    {'path': '', component: DashboardComponent}
  ]},
  {'path': 'welcome', component: WelcomeComponent},
  {'path': 'login', component: LoginComponent},
  {'path': 'users/create', component: UserCreateComponent, canActivate: [AuthGuard]},
  {'path': 'users/:id', component: UserShowComponent, canActivate: [AuthGuard]},
  {'path': 'users/:id/edit', component: UserUpdateComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
