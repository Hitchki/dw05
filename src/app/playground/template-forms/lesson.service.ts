import { Injectable } from '@angular/core';
import { StudentLevel } from './studentenlevel';

@Injectable()
export class LessonService {

  private id: string;

  title = '';
  duration = 0;
  public description = '';
  private _level: StudentLevel = StudentLevel.BEGINNER;


  constructor(
  ) {

  }

  set level(level: string) {
    console.log('setting lessons level');
    this._level = StudentLevel[level];
  }
}
