import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { SuperHero } from '../../@shared/interfaces/super-hero-interfaces';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-super-hero-crud',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    FormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './super-hero-crud.component.html',
  styleUrl: './super-hero-crud.component.scss',
})
export class SuperHeroCrudComponent {
  heroForm!: FormGroup;
  constructor(public fb: FormBuilder) {
    this.buildForm();
  }
  buildForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required], // Campo obligatorio
      realName: [''],
      id: [0, Validators.required],
      movies: this.fb.array([]),
      actors: this.fb.array([]),
      abilities: this.fb.array([]),
      img: [''],
      description: [''],
    });
  }
}
