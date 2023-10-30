import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupdata!: FormGroup ;

  constructor(private fb: FormBuilder, private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signupdata = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSignUp() {
    if (this.signupdata.valid) {
      const email = this.signupdata.value.email;
      const username = this.signupdata.value.username;
      const password = this.signupdata.value.password;
      const confirmPassword = this.signupdata.value.confirmPassword;

      if (confirmPassword !== password) {
        alert("Passwords do not match");
        return;
      }

      this.authservice.signup(username, email, password, confirmPassword).subscribe(
        (data) => {
          console.log('Signup successful:', data);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Signup failed:', error);
        }
      );
    }
  }
}
