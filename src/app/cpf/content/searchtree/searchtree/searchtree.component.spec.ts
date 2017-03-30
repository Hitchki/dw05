import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtreeComponent } from './searchtree.component';

describe('SearchtreeComponent', () => {
  let component: SearchtreeComponent;
  let fixture: ComponentFixture<SearchtreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchtreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
