import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
    
  
    ngOnInit() {
  }

  loginform: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    password : new FormControl(''),

  });

  onSubmit(){
  console.log(this.loginform.value);
  }

}
