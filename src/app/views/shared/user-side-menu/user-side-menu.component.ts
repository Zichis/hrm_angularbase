import { Component, Input, OnInit } from '@angular/core';
import { faBars, faCalendarCheck, faCog, faTh, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-side-menu',
  templateUrl: './user-side-menu.component.html',
  styleUrls: ['./user-side-menu.component.scss']
})
export class UserSideMenuComponent implements OnInit {
  @Input() sideMenuOpen: boolean;
  th = faTh;
  userIcon = faUser;
  menuIcon = faBars;
  settingIcon = faCog;
  attendanceIcon = faCalendarCheck;

  constructor() { }

  ngOnInit(): void {
  }

  onCloseSideMenu() {
    this.sideMenuOpen = false;
  }

}
