import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-complex-form-using-reactive-form',
  templateUrl: './complex-form-using-reactive-form.component.html',
  styleUrls: ['./complex-form-using-reactive-form.component.css']
})
export class ComplexFormUsingReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  complexLoginForm: FormGroup= new FormGroup({
    name: new FormControl(''),
    address: new FormGroup({
      streetName : new FormControl(''),
    city: new FormControl(''),
    pincode:new FormControl(''),
  })
  });

  onSubmit(){
    console.log(this.complexLoginForm.value);
  }
}
