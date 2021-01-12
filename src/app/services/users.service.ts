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

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  getUsers(){
    console.log(this.authToken);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.get('http://localhost:4000/users', {'headers': headers});
  }

  createUser(data){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.post('http://localhost:4000/users', data, {'headers': headers});
  }

  getUser(id){
    return this.http.get(`http://localhost:4000/users/${id}`, {'headers': this.headers});
  }

  getCurrentUser(){
    return this.http.get(`http://localhost:4000/current-user`, {'headers': this.headers});
  }

  deleteUser(id){
    return this.http.delete(`http://localhost:4000/users/${id}`, {'headers': this.headers});
  }

  updateUser(data, id){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.put(`http://localhost:4000/users/${id}`, data, {'headers': headers});
  }

  public isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(this.authToken);
  }
}
