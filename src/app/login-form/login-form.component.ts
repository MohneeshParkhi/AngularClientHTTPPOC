import { Component, OnInit } from '@angular/core';
import { Login } from '../modals/login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  modelLogin: Login;
  message ="Please Enter the value";
  check;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(value) {
    if(value["username"] == "" || value["password"] == ""){
       this.check=true;
    }else{
      this.check = false;
      console.log(value);
    }
  }
  exportData(){
    
  }

}
