import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-department-show',
  templateUrl: './department-show.component.html',
  styleUrls: ['./department-show.component.scss']
})
export class DepartmentShowComponent implements OnInit {
  backArrowIcon = faChevronLeft;
  department: Department;

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.departmentService.getDepartment(id).subscribe((data) => {
      console.log(data['department']);
      this.department = data['department'];
    }, (error) => {
        // Handle error!
      }
    );
  }

}
