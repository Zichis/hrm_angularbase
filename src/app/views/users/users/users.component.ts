import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../models/user';
import { faUserPlus, faEdit, faTrash, faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  edit = faEdit;
  trash = faTrash;
  userPlus = faUserPlus;
  infoCircle = faInfoCircle;
  timesCircle = faTimesCircle;
  user: User;
  loggedUser: User;
  deleteClicked: boolean = false;
  alertMsg = localStorage.getItem('baseAppAlert');

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      this.autoRemoveAlert();
    }, (error) => {
      if (error.status === 401) {
        window.location.href = "/login";
      }
    });

    this.userService.getCurrentUser().subscribe((response) => {
      this.loggedUser = response['data']['user'];
    });
  }

  setInitial(user) {
    return user.first_name.charAt(0).toUpperCase();
  }

  onDelete(id: any) {
    this.deleteClicked = true;
    this.userService.getUser(id).subscribe((data: User) => {
      this.user = data;
      this.autoRemoveAlert();
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
      this.deleteClicked = false;
      this.users = response['data']['users'];
      localStorage.setItem('baseAppAlert', `Account deleted.`);
      this.alertMsg = localStorage.getItem('baseAppAlert');

      // If user deleted is the last user
      if (this.users.length < 1) {
        this.signOut();
      }

      // If user deleted is the logged user
      if (this.loggedUser.id == id) {
        this.signOut('/login');
      }
     
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
    localStorage.removeItem("baseAppAlert");
    this.alertMsg = null;
  }

  signOut(redirectUrl:string = "/onboarding") {
    this.userService.signOut().subscribe((response) => {
      localStorage.removeItem('baseAppToken');
      localStorage.removeItem("baseAppAlert");
      window.location.href = redirectUrl;
    });
  }

}
