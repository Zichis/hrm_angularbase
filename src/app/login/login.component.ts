import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';

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

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log(this.loginForm.value);
    this.loginService.loginUser(this.loginForm.value).subscribe((data) => {
      console.log(data);
      //console.log(data.token.original.token);
      localStorage.setItem('baseAppToken', data['token']['original']['token']);
    }, (error) => {
        if (error.status === 200) {
          this.router.navigate(['/']);
        }
      }
    );
  }

}
