import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {
  baseUrl = 'http://localhost:3000';


  constructor(private http: HttpClient) { }
  updateProfile(name: string, designation_type: string, sid_mno: string, department_type: string, address: string, dofa: string, dob:string, gender_type:string): Observable<any> {
    const registrationData = {
      name: name,
      designation: designation_type,
      sid_mno: sid_mno,
      department_type: department_type,
      address: address,
      dofa: dofa,
      dob: dob,
      gender_type: gender_type
      


    };

    const url = `${this.baseUrl}/register`;
    return this.http.post(url, registrationData);
  }
}
