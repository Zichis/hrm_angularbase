import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: string = 'http://hrm_lumenbase.test';

  constructor(private http: HttpClient) { }

  loginUser(data:any){
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}
