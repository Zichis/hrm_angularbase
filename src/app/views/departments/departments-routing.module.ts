import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentCreateComponent } from './department-create/department-create.component';
import { DepartmentShowComponent } from './department-show/department-show.component';
import { DepartmentUpdateComponent } from './department-update/department-update.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  { path: '', component: DepartmentComponent },
  { path: 'create', component: DepartmentCreateComponent },
  { path: ':id/edit', component: DepartmentUpdateComponent },
  { path: ':id', component: DepartmentShowComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule {}
