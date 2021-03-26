import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Department } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.scss']
})
export class DepartmentUpdateComponent implements OnInit {
  department: Department;
  updateDepartmentForm = this.fb.group({
    name: ['', [Validators.required]]
  });
  nameError = '';
  backArrowIcon = faChevronLeft;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.departmentService.getDepartment(id).subscribe((data: {department: Department}) => {
      this.department = data.department;
      this.updateDepartmentForm.patchValue({
        name: data.department.name,
      });
    }, (error) => {
        //
      }
    );
  }

  get name(){ return this.updateDepartmentForm.get('name'); }

  onUpdate() {
    this.departmentService.updateDepartment(this.updateDepartmentForm.value, this.department.id).subscribe((data) => {
      localStorage.setItem('baseAppAlert', `Department updated!`);
      this.router.navigate(['/admin/departments']);
    }, (error) => {
        // Handle errors!
      }
    );
  }

}
