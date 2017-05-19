import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'cpf-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      title: new FormControl(
          'This ist the title', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ]
      ),
      duration: new FormControl(10, [
        Validators.required,
        Validators.pattern('[0-9]+')
      ]),
      description: new FormControl('Description goes here', [
        Validators.required])
    });
  }

  ngOnInit() {
  }

}
