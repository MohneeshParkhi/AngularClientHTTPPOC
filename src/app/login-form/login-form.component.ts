import { Component, OnInit } from '@angular/core';
import { Login } from '../modals/login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  modelLogin: Login;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(value) {
    console.log(value);
    console.log(this.modelLogin.username);
    console.log(this.modelLogin.password);
  }

}
