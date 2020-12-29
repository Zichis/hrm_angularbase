import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  createForm = this.fb.group({
    email: '',
    password: '',
    first_name: '',
    last_name: ''
  });

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    console.log(this.createForm.value);
    this.usersService.createUser(this.createForm.value).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/']);
    }, (error) => {
        //
      }
    );
  }

}
