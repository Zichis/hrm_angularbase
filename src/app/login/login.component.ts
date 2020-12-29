import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log(this.loginForm.value);
    this.loginService.loginUser(this.loginForm.value).subscribe((data) => {
      console.log(data);
      //console.log(data.token.original.token);
      localStorage.setItem('baseAppToken', data['token']['original']['token']);
      this.router.navigate(['/']);
    }, (error) => {
        //
      }
    );
  }

}
