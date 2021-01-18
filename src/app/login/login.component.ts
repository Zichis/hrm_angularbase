import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from "@angular/router";
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  errorMessage = '';
  ready: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.usersService.numberOfUsers().subscribe((response) => {
      if (response['data']['users'] == 0) {
        window.location.href = "/onboarding";
      }
      this.ready = true;
    });
  }

  get email(){ return this.loginForm.get('email'); }

  get password(){ return this.loginForm.get('password'); }

  onLogin(): void {
    console.log(this.loginForm.value);
    this.loginService.loginUser(this.loginForm.value).subscribe((data) => {
      console.log(data);
      //console.log(data.token.original.token);
      localStorage.setItem('baseAppToken', data['token']['original']['token']);
      this.router.navigate(['/']);
    }, (error) => {
        this.errorMessage = error['error']['message'];
      }
    );
  }

}
