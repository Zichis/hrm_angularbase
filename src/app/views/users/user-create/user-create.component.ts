import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { Router } from "@angular/router";

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
    last_name: ['', [Validators.required]]
  });
  emailError = '';
  passwordError = '';
  firstNameError = '';
  lastNameError = '';

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get email(){ return this.createForm.get('email'); }

  get password(){ return this.createForm.get('password'); }

  get firstName(){ return this.createForm.get('first_name'); }

  get lastName(){ return this.createForm.get('last_name'); }

  onCreate(): void {
    this.usersService.createUser(this.createForm.value).subscribe((data) => {
      localStorage.setItem('baseAppAlert', `Account created for ${this.firstName.value}`);
      this.router.navigate(['/admin/users']);
    }, (error) => {
        this.emailError = error['error']['email'];
        this.passwordError = error['error']['password'];
        this.firstNameError = error['error']['first_name'];
        this.lastNameError = error['error']['last_name'];
      }
    );
  }

}
