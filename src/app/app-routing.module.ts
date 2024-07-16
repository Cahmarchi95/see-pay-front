import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavComponent } from './components/nav/nav.component';
import { DespesasComponent } from './pages/despesas/despesas.component';
import { RendimentosComponent } from './pages/rendimentos/rendimentos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: NavComponent,
    children: [
      {
        path: 'despesas',
        component: DespesasComponent,
      },
      {
        path: 'rendimentos',
        component: RendimentosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
