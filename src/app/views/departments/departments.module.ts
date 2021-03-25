import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DepartmentCreateComponent } from './department-create/department-create.component';
import { DepartmentShowComponent } from './department-show/department-show.component';
import { DepartmentUpdateComponent } from './department-update/department-update.component';
import { DepartmentComponent } from './department/department.component';

@NgModule({
  declarations: [
    DepartmentComponent,
    DepartmentCreateComponent,
    DepartmentShowComponent,
    DepartmentUpdateComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DepartmentsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DepartmentsModule {}
