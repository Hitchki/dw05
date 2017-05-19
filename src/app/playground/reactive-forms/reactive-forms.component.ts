import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Lesson, StudentLevel} from './lesson';

@Component({
  selector: 'cpf-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  myForm: FormGroup;

  lesson = new Lesson(
    'Title goes here',
    0,
    'Description goes here',
    'Transcript goes here',
    StudentLevel.BEGINNER
  );

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      title: [ 'here comes the title', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)]
        ],
      duration: [10, [
        Validators.required,
        Validators.pattern('[0-9]+')]
      ],
      description: ['Description goes here', [
        Validators.required]]
    });

    this.myForm.valueChanges
      .filter(() => this.myForm.valid)
      .map(value => new Lesson(value.title, value.duration, value.description, value.transcript, StudentLevel.BEGINNER))
      .do(formValue => console.log('formValue', formValue))
      .subscribe(
        lesson => this.lesson = lesson
      );
  }

  ngOnInit() {
  }

}
