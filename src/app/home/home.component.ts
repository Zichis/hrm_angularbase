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
  user:any;
  userLetter:any;
  dropdownClicked = false;
  today: number = Date.now();

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((response) => {
      this.user = response['data']['user'];
      this.userLetter = this.user.first_name.charAt(0).toUpperCase();
    }, (error) => {
      if (error.status === 401) {
        //this.router.navigate(['/login']);
        window.location.href = "/login";
      }
    });
  }

  onDropdownClick() {
    this.dropdownClicked = !this.dropdownClicked;
  }

  onSignOut() {
    this.userService.signOut().subscribe((response) => {
      localStorage.removeItem('baseAppToken');
      window.location.href = "/login";
    }, (error) => {
      if (error.status === 401) {
        window.location.href = "/login";
      }
    })
  }

  // Getters
  setDeleteClicked(status: boolean) {
    this.deleteClicked = status;
  }

  /*getUsers(){
    this.users = this.userService.getUsers();
  }*/

}
