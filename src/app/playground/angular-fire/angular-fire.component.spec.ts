import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireComponent } from './angular-fire.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AngularFireComponent', () => {
  let component: AngularFireComponent;
  let fixture: ComponentFixture<AngularFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
