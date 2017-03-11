import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMoreComponent } from './nav-more.component';

describe('NavMoreComponent', () => {
  let component: NavMoreComponent;
  let fixture: ComponentFixture<NavMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
