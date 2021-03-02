import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  authToken = localStorage.getItem('baseAppToken');
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.authToken}`
  });
  baseUrl: string = 'http://hrm_lumenbase.test';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.baseUrl}/attendance`, {'headers': this.headers});
  }

  clockIn() {
    return this.http.get(`${this.baseUrl}/attendance/clock-in`, {'headers': this.headers});
  }

  clockOut() {
    return this.http.get(`${this.baseUrl}/attendance/clock-out`, {'headers': this.headers});
  }

  status() {
    return this.http.get(`${this.baseUrl}/attendance/status`, {'headers': this.headers});
  }
}
