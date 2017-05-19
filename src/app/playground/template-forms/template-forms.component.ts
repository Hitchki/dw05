import { Component, OnInit } from '@angular/core';
// import {Lesson} from './lesson';
import {LessonService} from './lesson.service';


@Component({
  selector: 'cpf-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
  providers: [LessonService]
})
export class TemplateFormsComponent implements OnInit {

  constructor(public lesson: LessonService) {
  }

  ngOnInit() {
    console.log('Lesson Value:', this.lesson);
  }

  // createLesson() {
  //   // console.log('Lesson Value:', this.lesson);
  // }

  summaryStatus(summary) {
    return {
      color: !summary.valid  && !summary.pristine  ? 'red' : 'black'
    };
  }
}
