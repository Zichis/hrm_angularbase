import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UserUpdateComponent } from './user-update/user-update.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserCreateComponent,
    UserShowComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UsersModule { }
