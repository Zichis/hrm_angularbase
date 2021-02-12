import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss']
})
export class UserShowComponent implements OnInit {
  user: any;
  userLetter: string;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(id).subscribe((data) => {
      this.user = data;
      this.userLetter = this.user.first_name.charAt(0).toUpperCase();
    }, (error) => {
        localStorage.setItem('baseAppAlert', `User not found!`);
        window.location.href = '/admin/users';
      }
    );
  }

}
