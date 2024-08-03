import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavComponent } from './components/nav/nav.component';
import { DespesasComponent } from './pages/despesas/despesas.component';
import { RendimentosComponent } from './pages/rendimentos/rendimentos.component';
import { DashComponent } from './components/dash/dash.component';
import { AuthGuardService } from './services/auth.guard.service';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'menu',
    component: NavComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'despesas',
        component: DespesasComponent,
      },
      {
        path: 'rendimentos',
        component: RendimentosComponent,
      },
      {
        path: 'dash',
        component: DashComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
