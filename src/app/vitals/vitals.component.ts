import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent {

  vitalsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.vitalsForm = this.formBuilder.group({
      name: ['', Validators.required],
      pulseRate: [null, Validators.required],
      respiratoryRate: [null, Validators.required],
      bloodPressure: ['', Validators.required],
      temperature: [null, Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.vitalsForm.valid) {
      const vitalsData = this.vitalsForm.value;
      // Send vitalsData to your backend or handle it as needed.
    }
  }
}
