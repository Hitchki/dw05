import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'cpf-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      title: [
          Validators.required, [
          Validators.minLength(3),
          Validators.maxLength(10)]
        ],
      duration: [10, [
        Validators.required,
        Validators.pattern('[0-9]+')]
      ],
      description: ['Description goes here', [
        Validators.required]]
    });
  }

  ngOnInit() {
  }

}
