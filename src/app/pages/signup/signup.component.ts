import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // constructor(private afAuth: AngularFireAuth) {}
  signup() {
    console.log(this.form.value);
    this.form.reset();
    this.form.get('nome')?.clearValidators();
    this.form.get('nome')?.updateValueAndValidity();
    this.form.get('email')?.clearValidators();
    this.form.get('email')?.updateValueAndValidity();
    this.form.get('senha')?.clearValidators();
    this.form.get('senha')?.updateValueAndValidity();
  }

  // signup() {
  //   this.afAuth
  //     .createUserWithEmailAndPassword(this.email, this.senha)
  //     .then((userCredential) => {
  //       console.log('Usuário cadastrado!', userCredential.user);
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao cadastrar usuário:', error);
  //     });
  // }
}
