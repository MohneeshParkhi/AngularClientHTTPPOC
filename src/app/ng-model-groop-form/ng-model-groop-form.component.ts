import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-groop-form',
  templateUrl: './ng-model-groop-form.component.html',
  styleUrls: ['./ng-model-groop-form.component.css']
})
export class NgModelGroopFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(value){
    console.log(value);
  }

}
