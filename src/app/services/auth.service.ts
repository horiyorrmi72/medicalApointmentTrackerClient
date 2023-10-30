import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }

  registrationStatus(): Observable<boolean> {
    const url = `${this.baseUrl}/registered`;
    return this.http.get<boolean>(url);
  }

  designedStatus(): Observable<string> {
    const url = `${this.baseUrl}/designed`;
    return this.http.get<string>(url);
  }

  login(email: string, password: string): Observable<any> {
    const loginData = {
      email: email,
      password: password,
    };

    const url = `${this.baseUrl}/signin`;
    return this.http.post(url, loginData);
  }

  signup(email: string, username: string, password: string, confirmPassword: string): Observable<any> {
    const signupData = {
      email: email,
      username: username,
      password: password,
    };

    const url = `${this.baseUrl}/signup`;
    return this.http.post(url, signupData);
  }

  logout(): void {
    this.clearToken();
  }

  refreshAccessToken(refreshToken: string): Observable<string> {
    
    const url = `${this.baseUrl}/refresh`;
    return this.http.post<string>(url, { refreshToken });
  }

  getUserDesignation(): Observable<string> {
    const url = `${this.baseUrl}/userDesignation`;
    return this.http.get<string>(url);
  }
}
