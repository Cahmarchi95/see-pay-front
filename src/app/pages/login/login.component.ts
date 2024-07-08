import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    console.log(this.form.value);
    this.form.reset();
    this.form.get('email')?.clearValidators();
    this.form.get('email')?.updateValueAndValidity();
    this.form.get('senha')?.clearValidators();
    this.form.get('senha')?.updateValueAndValidity();
  }
}
