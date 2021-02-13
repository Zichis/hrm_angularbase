import { Component, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  timesCircle = faTimesCircle;
  alertMsg = localStorage.getItem('baseAppAlert');

  constructor() { }

  ngOnInit(): void {
    this.autoRemoveAlert();
  }

  autoRemoveAlert() {
    setTimeout(() => {
      localStorage.removeItem("baseAppAlert");
      this.alertMsg = null;
    }, 7000);
  }

  onCloseAlert() {
    localStorage.removeItem("baseAppAlert");
    this.alertMsg = null;
  }

}
