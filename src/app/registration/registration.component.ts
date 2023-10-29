import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      designation_type: ['', Validators.required],
      sid_mno: ['', Validators.required],
      department_type: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      dofa: ['', Validators.required],
      dob: ['', Validators.required],
      gender_type: ['', Validators.required],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // cpassword: ['', Validators.required],
      user_type: ['', Validators.required]
    });
  }
}