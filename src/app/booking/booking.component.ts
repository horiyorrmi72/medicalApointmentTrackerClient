import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  appointmentForm!: FormGroup;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      designation_type: ['student', Validators.required],
      rfa: ['', Validators.required],
      past_ailment: ['', Validators.required],
      current_diagnosis: ['',Validators.required], 
      doa: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      // Handle form submission here
      console.log(this.appointmentForm.value);
    }
  }
}

