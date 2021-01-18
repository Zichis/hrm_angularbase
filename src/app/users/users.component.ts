import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { faUserPlus, faEdit, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Object;
  edit = faEdit;
  trash = faTrash;
  userPlus = faUserPlus;
  infoCircle = faInfoCircle;
  user: Object;
  deleteClicked: boolean = false;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    }, (error) => {
      if (error.status === 401) {
        window.location.href = "/login";
      }
    });
  }

  setInitial(user) {
    return user.first_name.charAt(0).toUpperCase();
  }

  onDelete(id: any) {
    this.deleteClicked = true;
    this.userService.getUser(id).subscribe((data) => {
      this.user = data;
    }, (_error) => {
        //
      }
    );
  }

  onCancelDelete() {
    this.deleteClicked = false;
  }

  onConfirmDelete(id: any) {
    this.userService.deleteUser(id).subscribe((response) => {
      this.users = response['data']['users'];
      this.deleteClicked = false;
    }, (error) => {
      if (error.status === 401) {
        window.location.href = "/login";
      }
    })
  }

}
