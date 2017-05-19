export enum StudentLevel {
  BEGINNER,
  ADVANCED
}


export class Lesson {
  id: string;

  constructor(
    public title: string = 'abc',
    duration: number = 10,
    public description: string = '',
    private _level: StudentLevel = StudentLevel.BEGINNER) {

  }

  // set level(level: string) {
  //   console.log('setting lessons level');
  //   this._level = StudentLevel[level];
  // }
}
