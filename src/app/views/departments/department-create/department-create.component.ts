import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.scss']
})
export class DepartmentCreateComponent implements OnInit {
  createDepartmentForm = this.fb.group({
    name: ['', [Validators.required]]
  });
  nameError = '';

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get name(){ return this.createDepartmentForm.get('name'); }

  onCreate(): void {
    console.log(this.createDepartmentForm.value);
    this.departmentService.createDepartment(this.createDepartmentForm.value).subscribe((data) => {
      localStorage.setItem('baseAppAlert', `New department created!`);
      this.router.navigate(['/admin/departments']);
    }, (error) => {
        // Handle error!
      }
    );
  }

}
