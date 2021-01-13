import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HomeComponent } from '../home/home.component';
import { faUserPlus, faEdit, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: Object;
  edit = faEdit;
  trash = faTrash;
  userPlus = faUserPlus;
  infoCircle = faInfoCircle;
  user: Object;
  deleteClicked: boolean = false;

  constructor(private userService: UsersService, private home: HomeComponent) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    }, (error) => {
      if (error.status === 401) {
        //this.router.navigate(['/login']);
        window.location.href = "/login";
      }
    });
  }

  setInitial(user) {
    return user.first_name.charAt(0).toUpperCase();
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

}
