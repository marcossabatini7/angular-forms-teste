import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Forms';

  form: FormGroup;

  locations: string[] = ['Shelter 1', 'Shelter 2', 'Shelter 3'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      name: '',
      phoneNumber: '',
      preferredLocation: '',
      animals: this.fb.group({
        dogs: false,
        cats: false,
        reptiles: false,
      }),
      references: this.fb.array([this.fb.control('')]),
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  addEmail(): void {
    this.references.push(this.fb.control(''));
  }

  removeEmail(index: number): void {
    this.references.removeAt(index);
  }

  selectLocation(event: any): void {
    this.form.patchValue({
      preferredLocation: event.target.value,
    });
  }

  get references(): FormArray {
    return this.form.get('references') as FormArray;
  }
}
