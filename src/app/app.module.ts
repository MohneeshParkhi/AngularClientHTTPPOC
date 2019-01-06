import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarpocComponent } from './navbarpoc/navbarpoc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModelGroopFormComponent } from './ng-model-groop-form/ng-model-groop-form.component';
// import { AppRoutingModule } from "./AppRoutingModule";
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ComplexFormUsingReactiveFormComponent } from './complex-form-using-reactive-form/complex-form-using-reactive-form.component';
import { RegistrationTemplateFormValidationComponent } from './registration-template-form-validation/registration-template-form-validation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    NavbarpocComponent,
    NgModelGroopFormComponent,
    ReactiveFormComponent,
    ComplexFormUsingReactiveFormComponent,
    RegistrationTemplateFormValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
