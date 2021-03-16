import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss']
})
export class UserShowComponent implements OnInit {
  user: User;
  userLetter: string;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(id).subscribe((user: User) => {
      this.user = user;
    }, (error) => {
        localStorage.setItem('baseAppAlert', `User not found!`);
        window.location.href = '/admin/users';
      }
    );
  }

}
