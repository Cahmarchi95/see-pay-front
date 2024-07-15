import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  signup() {
    if (!this.form.valid) {
      return;
    }

    this.authService.register(this.form.value.email, this.form.value.password);

    this.form.reset();
    this.form.get('nome')?.clearValidators();
    this.form.get('nome')?.updateValueAndValidity();
    this.form.get('email')?.clearValidators();
    this.form.get('email')?.updateValueAndValidity();
    this.form.get('password')?.clearValidators();
    this.form.get('password')?.updateValueAndValidity();
  }
}
