import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormtextComponent } from './normtext.component';

xdescribe('NormtextComponent', () => {
  let component: NormtextComponent;
  let fixture: ComponentFixture<NormtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
