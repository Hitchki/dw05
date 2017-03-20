import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from './content.service';
import { ApplicationState } from '../../store/application-state';
import { Store } from '@ngrx/store';
// import {
//   TestAction, UserContentLoadedAction, PathStringChangedAction,
//   ContentStatesChangedAction, LoadUserContentAction, TestEffectsAction
// } from '../../store/actions';
import { ContentStates, PathData, PathNodes, ContentVM, UiChange } from './content.interfaces'
import { Observable } from 'rxjs';

@Component({
  selector: 'cpf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private pathNodesString: string;
  private mainContentVM: ContentVM;
  private navContentVM: ContentVM;
  private navMoreContentVM: ContentVM;

  userId$: Observable<string>;
  urlPath$: Observable<string>;
  data: Observable<any>;

  constructor(private contentService: ContentService,
              private store: Store<ApplicationState>
  ) {
    // this.
  }



    ngOnInit() {}


}
