import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'cpf-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      title: new FormControl('This ist the title'),
      duration: new FormControl(10),
      description: new FormControl('Description goes here')
    });
  }

  ngOnInit() {
  }

}
