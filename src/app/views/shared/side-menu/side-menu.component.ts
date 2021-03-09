import { Component, Input, OnInit } from '@angular/core';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faCalendarCheck, faCog, faTh, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() sideMenuOpen: boolean;
  th = faTh;
  usersIcon = faUsers;
  attendanceIcon = faCalendarCheck;
  bufferIcon = faBuffer;
  departmentIcon = faBuilding;
  settingIcon = faCog;

  constructor() { }

  ngOnInit(): void {
  }

  onCloseSideMenu() {
    this.sideMenuOpen = false;
  }

}
