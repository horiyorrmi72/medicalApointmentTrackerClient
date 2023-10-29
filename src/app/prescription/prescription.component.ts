import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent {

  prescriptionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.prescriptionForm = this.formBuilder.group({
      name: ['', Validators.required],
      pastDiagnosis: this.formBuilder.array([]),
      presentDiagnosis: this.formBuilder.array([]),
      prescribedDrugs: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.prescriptionForm.valid) {
      const prescriptionData = this.prescriptionForm.value;
      // Send prescriptionData to your backend or handle it as needed.
    }
  }

  addPastDiagnosis() {
    (this.prescriptionForm.get('pastDiagnosis') as FormArray).push(this.formBuilder.control(''));
  }

  addPresentDiagnosis() {
    (this.prescriptionForm.get('presentDiagnosis') as FormArray).push(this.formBuilder.control(''));
  }

  addPrescribedDrugs() {
    (this.prescriptionForm.get('prescribedDrugs') as FormArray).push(this.formBuilder.control(''));
  }
}