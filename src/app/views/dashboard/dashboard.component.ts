import { Component, OnInit } from '@angular/core';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Department } from 'src/app/models/department.model';
import { User } from 'src/app/models/user.model';
import { DepartmentService } from 'src/app/services/department.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  usersIcon = faUsers;
  departmentIcon = faBuilding;
  eventIcon = faBuffer;
  users: User[];
  departments: Department[];
  numberOfUsers: number;

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(
    private usersService: UsersService,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.usersService.numberOfUsers().subscribe((response: {data: {users: number}}) => {
      this.numberOfUsers = response.data.users;
    });

    this.departmentService.getDepartments().subscribe((departments: Department[]) => {
      this.departments = departments;
    });
  }

}
