import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formdata: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.formdata = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]
      ]
    });
  }

  onLogin() {
    if (this.formdata.valid) {
      const email = this.formdata.value.email;
      const password = this.formdata.value.password;

      this.authService.login(email, password).subscribe(
        (data) => {

          //retrieve token
          const token = data.token;

          //set the token
          this.authService.setToken(token);

          this.router.navigate(['/register']);
          // this.authService.designedStatus().subscribe((status) => {
          //   if (status === 'Staff') {
          //     this.router.navigate(['/register']);
          //   } else {
          //     this.router.navigate(['/home']);
          //   }
          //   console.log(data);
          // });
        },
        (error) => {
          console.error('Login failed:', error);
          this.router.navigate(['/login']);
        }
      );
    }
  }
}
