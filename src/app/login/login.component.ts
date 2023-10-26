import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formdata: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formdata = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4)]], 
      password: ['', [Validators.required, Validators.email]] 
    });
  }

  onLogin() {
    if (this.formdata.valid) {
      const email = this.formdata.value.email;
      const password = this.formdata.value.password;

      console.log('Email:', email);
      console.log('Password:', password);
    }
  }

}
