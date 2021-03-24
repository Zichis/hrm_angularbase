import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  user: User;
  updateForm = this.fb.group({
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    department_id: [],
    admin: []
  });
  firstNameError = '';
  lastNameError = '';
  departmentIdError = '';
  departments: Department[];

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe((departments: Department[]) => {
      this.departments = departments;
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(id).subscribe((data: User) => {
      this.user = data;
      let adminRole = this.user.roles.find(role => role.id === 1);
      this.updateForm.patchValue({
        first_name: this.user.personal.first_name,
        last_name: this.user.personal.last_name,
        department_id: this.user.department_id,
        admin: adminRole != null
      });
    }, (error) => {
        //
      }
    );
  }

  get firstName(){ return this.updateForm.get('first_name'); }

  get lastName(){ return this.updateForm.get('last_name'); }

  get departmentId(){ return this.updateForm.get('department_id'); }

  onUpdate(): void {
    console.log(this.updateForm.value);
    this.usersService.updateUser(this.updateForm.value, this.user['id']).subscribe((data) => {
      localStorage.setItem('baseAppAlert', `User's account updated.`);
      this.router.navigate(['/admin/users']);
    }, (error) => {
        this.firstNameError = error['error']['first_name'];
        this.lastNameError = error['error']['last_name'];
      }
    );
  }

}
