import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  createAccountForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]]
  });
  emailError = '';
  passwordError = '';
  firstNameError = '';
  lastNameError = '';
  ready: boolean = false;

  constructor(private fb: FormBuilder, private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.numberOfUsers().subscribe((response) => {
      if (response['data']['users'] > 0) {
        window.location.href = "/";
      }
      this.ready = true;
    });
  }

  get email(){ return this.createAccountForm.get('email'); }

  get password(){ return this.createAccountForm.get('password'); }

  get firstName(){ return this.createAccountForm.get('first_name'); }

  get lastName(){ return this.createAccountForm.get('last_name'); }

  onCreateAccount() {
    this.usersService.onboardUser(this.createAccountForm.value).subscribe((data) => {
      window.location.href = "/";
    }, (error) => {
        this.emailError = error['error']['email'];
        this.passwordError = error['error']['password'];
        this.firstNameError = error['error']['first_name'];
        this.lastNameError = error['error']['last_name'];
      }
    );
  }

}
