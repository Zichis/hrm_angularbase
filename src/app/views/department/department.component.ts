import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  departments;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    });
  }

}
