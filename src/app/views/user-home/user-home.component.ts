import { Component, OnInit } from '@angular/core';
import { faTh, faUsers, faBars, faUser, faCog, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from "../../services/users.service";
import { Router } from "@angular/router";
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  usersIcon = faUsers;
  menuIcon = faBars;
  users: any = [];
  deleteClicked = false;
  user:User;
  userLetter:any;
  dropdownClicked = false;
  today: number = Date.now();
  sideMenuOpen = false;
  isAdmin: boolean = false;

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((response: {data: {user: User}}) => {
      this.user = response.data.user;
    }, (error) => {
      if (error.status === 401) {
        //this.router.navigate(['/login']);
        window.location.href = "/login";
      }
    });

    this.userService.getRoles().subscribe((response) => {
      if (response['data']['roles'].includes('ROLE_ADMIN')) {
        this.isAdmin = true;
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

  toggleSidemenu() {
    this.dropdownClicked = false;
    this.sideMenuOpen = !this.sideMenuOpen;
  }

  onBodyClick() {
    this.dropdownClicked = false;
  }

  // Getters
  setDeleteClicked(status: boolean) {
    this.deleteClicked = status;
  }
}
