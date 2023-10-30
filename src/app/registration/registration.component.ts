import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterationService } from '../services/registeration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,
    private profileService: RegisterationService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],  // Corrected field name
      sid_mno: ['', Validators.required],
      department_type: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      dofa: ['', Validators.required],
      dob: ['', Validators.required],
      gender_type: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.registrationForm?.valid) {
      const name = this.registrationForm?.value.name;
      const designation = this.registrationForm?.value.designation; // Corrected field name
      const sid_mno = this.registrationForm?.value.sid_mno;
      const department = this.registrationForm?.value.department_type;
      const address = this.registrationForm?.value.address;
      const phone = this.registrationForm?.value.phone;
      const dofa = this.registrationForm?.value.dofa;
      const dob = this.registrationForm?.value.dob;
      const gender_type = this.registrationForm?.value.gender_type;

      if (name && designation && sid_mno && department && address && phone && dofa && dob && gender_type) {
        this.profileService.updateProfile(name, designation, sid_mno, department, address, phone, dofa, dob, gender_type).subscribe(
          (data) => {
            console.log('Signup successful:', data);
              this.router.navigate(['/home']);
            // if (designation === 'Staff') { // Corrected condition
            //   this.router.navigate(['/home']);
            // } else {
            //   this.router.navigate(['/booking']);
            // }
          },
          (error) => {
            console.error('registration failed:', error);
          }
        );
      }
    }
  }
}
