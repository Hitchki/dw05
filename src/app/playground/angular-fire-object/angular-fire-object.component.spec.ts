///<reference path="angular-fire-object.component.ts"/>
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireObjectComponent } from './angular-fire-object.component';

describe('AngularFireObjectComponent', () => {
  let component: AngularFireObjectComponent;
  let fixture: ComponentFixture<AngularFireObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarations: [ AngularFireObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFireObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
