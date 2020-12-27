import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  authToken = localStorage.getItem('baseAppToken');

  constructor(private http: HttpClient) { }

  getUsers(){
    console.log(this.authToken);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.get('http://localhost:4000/users', {'headers': headers});
  }
}
