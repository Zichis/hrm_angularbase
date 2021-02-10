import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { faUserPlus, faEdit, faTrash, faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

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
  timesCircle = faTimesCircle;
  user: Object;
  deleteClicked: boolean = false;
  alertMsg = localStorage.getItem('baseAppAlert');

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.autoRemoveAlert();
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
      localStorage.setItem('baseAppAlert', `Account deleted.`);
      this.alertMsg = localStorage.getItem('baseAppAlert');
      // Redirect to onboarding if user deleted is last user
      this.userService.numberOfUsers().subscribe((response) => {
        if (response['data']['users'] < 1) {
          window.location.href = "/onboarding";
        }
      });
    }, (error) => {
      if (error.status === 401) {
        window.location.href = "/login";
      }
    })
  }

  autoRemoveAlert() {
    setTimeout(() => {
      localStorage.removeItem("baseAppAlert");
      this.alertMsg = null;
    }, 7000);
  }

  onCloseAlert() {
    console.log("We are ready!");
    localStorage.removeItem("baseAppAlert");
    this.alertMsg = null;
  }

}
