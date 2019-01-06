import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModelGroopFormComponent } from './ng-model-groop-form/ng-model-groop-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ComplexFormUsingReactiveFormComponent } from './complex-form-using-reactive-form/complex-form-using-reactive-form.component';

const routes: Routes = [
  { path: 'loginForm',component:LoginFormComponent},
  {path: 'NgModelGroupForm', component:NgModelGroopFormComponent},
  {path:'reactiveForm', component:ReactiveFormComponent},
  {path: 'complexReactiveForm', component:ComplexFormUsingReactiveFormComponent}
  
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
