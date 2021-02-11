import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;
  userLetter: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getCurrentUser().subscribe((data) => {
      this.user = data['data']['user'];
      this.userLetter = this.user.first_name.charAt(0).toUpperCase();
    }, (error) => {
        //
      }
    );
  }

}
