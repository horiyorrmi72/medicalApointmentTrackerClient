import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  signup(username: string, password: string, email: string, confirmPassword:string): Observable<any> {
    const signupData = {
      username: username,
      email: email,
      password: password,
    
    
    };
    
    const url = `${this.baseUrl}/signup`; 
    return this.http.post(url, signupData);
  }
}
