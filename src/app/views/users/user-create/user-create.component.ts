import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { Router } from "@angular/router";
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  createForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    department_id: [],
    admin: []
  });
  emailError = '';
  passwordError = '';
  firstNameError = '';
  lastNameError = '';
  departmentIdError = '';
  departments: Department[];

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe((departments: Department[]) => {
      this.departments = departments;
    });
  }

  get email(){ return this.createForm.get('email'); }

  get password(){ return this.createForm.get('password'); }

  get firstName(){ return this.createForm.get('first_name'); }

  get lastName(){ return this.createForm.get('last_name'); }

  get departmentId(){ return this.createForm.get('department_id'); }

  onCreate(): void {
    this.usersService.createUser(this.createForm.value).subscribe((data) => {
      localStorage.setItem('baseAppAlert', `Account created for ${this.firstName.value}`);
      this.router.navigate(['/admin/users']);
    }, (error) => {
        this.emailError = error['error']['email'];
        this.passwordError = error['error']['password'];
        this.firstNameError = error['error']['first_name'];
        this.lastNameError = error['error']['last_name'];
        this.departmentIdError = error['error']['department_id'];
      }
    );
  }

}
