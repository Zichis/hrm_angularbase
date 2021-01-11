import { Component, OnInit } from '@angular/core';
import { faUserAlt, faUserPlus, faEdit, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from "../services/users.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userAlt = faUserAlt;
  userPlus = faUserPlus;
  edit = faEdit;
  trash = faTrash;
  infoCircle = faInfoCircle;
  users: any = [];
  deleteClicked = false;
  user;

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    }, (error) => {
      if (error.status === 401) {
        //this.router.navigate(['/login']);
        window.location.href = "/login";
      }
    })
  }

  onDelete(id) {
    this.deleteClicked = true;
    this.userService.getUser(id).subscribe((data) => {
      this.user = data;
    }, (error) => {
        //
      }
    );
  }

  onCancelDelete() {
    this.deleteClicked = false;
  }

  onConfirmDelete(id) {
    this.userService.deleteUser(id).subscribe((response) => {
      this.users = response['data']['users'];
      this.deleteClicked = false;
    }, (error) => {
      if (error.status === 401) {
        window.location.href = "/login";
      }
    })
  }

  setInitial(user) {
    return user.first_name.charAt(0).toUpperCase();
  }

  /*getUsers(){
    this.users = this.userService.getUsers();
  }*/

}
