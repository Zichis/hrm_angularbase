import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { Attendance } from '../../models/attendance.model';

@Component({
  selector: 'app-user-attendance',
  templateUrl: './user-attendance.component.html',
  styleUrls: ['./user-attendance.component.scss']
})
export class UserAttendanceComponent implements OnInit {
  canClockIn: boolean = true;
  canClockOut: boolean = true;
  attendances: Attendance[];

  constructor(private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.attendanceService.getCurrentUserAttendance().subscribe((response: {msg: string, attendances: Attendance[]}) => {
      this.attendances = response.attendances
      console.log(response.attendances);
    });

    this.attendanceService.status().subscribe((data: {canClockIn: boolean, canClockOut: boolean}) => {
      this.canClockIn = data.canClockIn;
      this.canClockOut = data.canClockOut;
    });
  }

  clockIn() {
    this.attendanceService.clockIn().subscribe((data: {msg: string, attendances: Attendance[]}) => {
      if (data.msg == 'Success') {
        this.canClockIn = false;
        this.attendances = data.attendances;
      }
    });
  }

  clockOut() {
    this.attendanceService.clockOut().subscribe((data: {msg: string, attendances: Attendance[]}) => {
      if (data.msg == 'Success') {
        this.canClockOut = false;
        this.attendances = data.attendances;
      }
    });
  }

}
