import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  updateProfile(name: string, designation: string, sid_mno: string, department_type: string, address: string, dofa: string, dob: string, gender_type: string, phone: string): Observable<any> {
    const registrationData = {
      name: name,
      designation: designation,
      sid_mno: sid_mno,
      department_type: department_type,
      address: address,
      dofa: dofa,
      dob: dob,
      gender_type: gender_type,
      phone: phone 
    };

    const url = `${this.baseUrl}/profile`;

    return this.http.post(url, registrationData)
      .pipe(
        catchError((error) => {
          
          console.error('Update profile failed:', error);
          throw error; 
        })
      );
  }
}
