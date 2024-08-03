import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/menu']);
      },
      (err) => {
        alert('Algo deu errado, tente novamente');
        this.router.navigate(['/login']);
      }
    );
  }

  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('Usuário cadastrado com sucesso!');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert('Algo deu errado, tente novamente');
        this.router.navigate(['/signup']);
      }
    );
  }

  logout() {
    this.fireAuth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert('Algo deu errado, tente novamente');
        this.router.navigate(['/signup']);
      }
    );
  }
}
