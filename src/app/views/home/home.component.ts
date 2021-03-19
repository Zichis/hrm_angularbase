import { Component, OnInit } from '@angular/core';
import { faTh, faUsers, faBars, faUser, faCog, faCalendarCheck, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from "../../services/users.service";
import { Router } from "@angular/router";
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userIcon = faUser;
  menuIcon = faBars;
  users: any = [];
  deleteClicked = false;
  user:any;
  userLetter:any;
  dropdownClicked = false;
  today: number = Date.now();
  sideMenuOpen = false;

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((response: {message: string, data: {user: User}}) => {
      this.user = response.data.user;
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
    this.userService.signOut().subscribe(() => {
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

  /*getUsers(){
    this.users = this.userService.getUsers();
  }*/

}
