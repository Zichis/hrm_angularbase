import { Component, OnInit } from '@angular/core';
import { faEdit, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  timesCircle = faTimesCircle;
  edit = faEdit;
  trash = faTrash;
  alertMsg = localStorage.getItem('baseAppAlert');
  departments;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    });
  }

  onDeleteDepartment(id: number) {
    console.log(id);
  }

  onCloseAlert() {
    localStorage.removeItem("baseAppAlert");
    this.alertMsg = null;
  }
}
