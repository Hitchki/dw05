import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireComponent } from './angular-fire.component';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
