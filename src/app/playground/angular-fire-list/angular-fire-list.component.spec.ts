import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireListComponent } from './angular-fire-list.component';

describe('AngularFireListComponent', () => {
  let component: AngularFireListComponent;
  let fixture: ComponentFixture<AngularFireListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFireListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
