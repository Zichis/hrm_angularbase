import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  user: any;
  updateForm = this.fb.group({
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]]
  });
  firstNameError = '';
  lastNameError = '';

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

  get firstName(){ return this.updateForm.get('first_name'); }

  get lastName(){ return this.updateForm.get('last_name'); }

  onUpdate(): void {
    this.usersService.updateUser(this.updateForm.value, this.user['id']).subscribe((data) => {
      localStorage.setItem('baseAppAlert', `User's account updated.`);
      this.router.navigate(['/users']);
    }, (error) => {
        this.firstNameError = error['error']['first_name'];
        this.lastNameError = error['error']['last_name'];
      }
    );
  }

}
