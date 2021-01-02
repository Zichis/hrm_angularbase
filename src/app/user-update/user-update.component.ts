import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  user: any;
  updateForm = this.fb.group({
    first_name: '',
    last_name: ''
  });

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(id).subscribe((data) => {
      this.user = data;
      this.updateForm.patchValue({
        first_name: data['first_name'],
        last_name: data['last_name']
      });
    }, (error) => {
        //
      }
    );
  }

  onUpdate(): void {
    console.log(this.updateForm.value);
    this.usersService.updateUser(this.updateForm.value, this.user['id']).subscribe((data) => {
      this.router.navigate(['/']);
    }, (error) => {
        //
      }
    );
  }

}
