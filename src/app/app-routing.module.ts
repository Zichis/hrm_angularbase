import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent} from './login/login.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserShowComponent } from './user-show/user-show.component';

const routes: Routes = [
  {'path': '', component: HomeComponent},
  {'path': 'welcome', component: WelcomeComponent},
  {'path': 'login', component: LoginComponent},
  {'path': 'users/create', component: UserCreateComponent},
  {'path': 'users/:id', component: UserShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
