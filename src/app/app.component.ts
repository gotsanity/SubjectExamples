import { DataService } from './data.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  measurementForm: FormGroup = new FormGroup({});

  constructor(private data: DataService, private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.measurementForm = this.fb.group({
      measurement: ['']
    });
  }

  onSubmit(): void {
    console.log(this.measurementForm.value);
    this.data.changeValue(this.measurementForm.value.measurement);
  }
}
