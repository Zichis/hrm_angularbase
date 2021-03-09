import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  authToken = localStorage.getItem('baseAppToken');
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.authToken}`
  });
  baseUrl: string = 'http://hrm_lumenbase.test';

  constructor(private http: HttpClient) { }

  getDepartments(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.get(`${this.baseUrl}/admin/departments`, {'headers': headers});
  }
}
