import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-attendance',
  templateUrl: './user-attendance.component.html',
  styleUrls: ['./user-attendance.component.scss']
})
export class UserAttendanceComponent implements OnInit {
  canClockIn: boolean = true;
  canClockOut: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
