import { Component, OnInit } from '@angular/core';
import { faEdit, faInfoCircle, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Department } from 'src/app/models/department.model';
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
  infoCircle = faInfoCircle;
  alertMsg = localStorage.getItem('baseAppAlert');
  deleteClicked: boolean = false;
  department: Department;
  departments: Department[];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe((departments: Department[]) => {
      this.departments = departments;
    });
  }

  onDeleteDepartment(id: any) {
    this.deleteClicked = true;
    this.departmentService.getDepartment(id).subscribe((data: {department: Department}) => {
      console.log(data);
      this.department = data.department;
      this.autoRemoveAlert();
    }, (_error) => {
        //
      }
    );
  }

  autoRemoveAlert() {
    setTimeout(() => {
      localStorage.removeItem("baseAppAlert");
      this.alertMsg = null;
    }, 7000);
  }

  onCancelDelete() {
    this.deleteClicked = false;
  }

  onConfirmDelete(id: any) {
    this.departmentService.deleteDepartment(id).subscribe((response: {data: {departments: Department[]}}) => {
      this.deleteClicked = false;
      this.departments = response.data.departments;
      localStorage.setItem('baseAppAlert', `Department deleted.`);
      this.alertMsg = localStorage.getItem('baseAppAlert');

    }, (error) => {
      //
    })
  }

  onCloseAlert() {
    localStorage.removeItem("baseAppAlert");
    this.alertMsg = null;
  }
}
