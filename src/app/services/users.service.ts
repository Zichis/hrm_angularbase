import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  authToken = localStorage.getItem('baseAppToken');
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.authToken}`
  });
  baseUrl: string = 'http://hrm_lumenbase.test';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  getUsers(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.get(this.baseUrl, {'headers': headers});
  }

  createUser(data){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.post(this.baseUrl, data, {'headers': headers});
  }

  getUser(id){
    return this.http.get(`${this.baseUrl}/users/${id}`, {'headers': this.headers});
  }

  getCurrentUser(){
    return this.http.get(`${this.baseUrl}/current-user`, {'headers': this.headers});
  }

  deleteUser(id){
    return this.http.delete(`${this.baseUrl}/users/${id}`, {'headers': this.headers});
  }

  signOut(){
    return this.http.get(`${this.baseUrl}/logout`, {'headers': this.headers});
  }

  updateUser(data, id){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.put(`${this.baseUrl}/users/${id}`, data, {'headers': headers});
  }

  onboardUser(data){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('${this.baseUrl}/onboard', data, {'headers': headers});
  }

  isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(this.authToken);
  }

  numberOfUsers() {
      return this.http.get(`${this.baseUrl}/users/count`);
  }

  getRoles() {
    return this.http.get(`${this.baseUrl}/user/roles`, {'headers': this.headers});
  }
}
