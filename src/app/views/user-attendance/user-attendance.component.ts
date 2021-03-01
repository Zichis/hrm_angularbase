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
    this.attendanceService.getAll().subscribe((data: Attendance[]) => {
      this.attendances = data;
    });

    this.attendanceService.status().subscribe((data) => {
      console.log(data);
      this.canClockIn = data['canClockIn'];
    });
  }

  clockIn() {
    console.log("HELLO");
    this.attendanceService.clockIn().subscribe((data) => {
      if (data['msg'] == 'Success') {
        this.canClockIn = false;
      }
    });
  }

}
