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

  createDepartment(data){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.post(`${this.baseUrl}/admin/departments`, data, {'headers': headers});
  }

  getDepartment(id){
    return this.http.get(`${this.baseUrl}/admin/departments/${id}`, {'headers': this.headers});
  }

  updateDepartment(data, id){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.put(`${this.baseUrl}/admin/departments/${id}`, data, {'headers': headers});
  }

  deleteDepartment(id){
    return this.http.delete(`${this.baseUrl}/admin/departments/${id}`, {'headers': this.headers});
  }
}
