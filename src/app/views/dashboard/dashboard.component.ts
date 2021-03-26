import { Component, OnInit } from '@angular/core';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  usersIcon = faUsers;
  departmentIcon = faBuilding;
  eventIcon = faBuffer;

  constructor() { }

  ngOnInit(): void {
    //
  }

}
