import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PathnodesService } from './pathnodes.service';
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

  // userId$: Observable<string>;
  // urlPath$: Observable<string>;
  // data: Observable<any>;

  constructor(private pathnodesService: PathnodesService,
              private store: Store<ApplicationState>
  ) {
    // this.
    const currentUserId = store.select(this.userIdSelector)
      .subscribe(
        cu => {
          console.log('x!!!!!!!currentUserId: ', cu);
        }
      );

    // const currentUserId = store.map(state => state.uiState.userId);
    const urlPath = store.map(state => state.uiState.urlPath);
    const data = store.map(state => state.storeData.content);

    console.log('!currentUserId: ', currentUserId);
    console.log('urlPath: ', urlPath);
    console.log('data: ', data);
  }



    ngOnInit() {}


  userIdSelector(state: ApplicationState): string {

    const currentUserId = state.uiState.userId;
    //   currentParticipant = state.storeData.participants[currentUserId];
    //
    // if (!currentParticipant) {
    //   return "";
    // }

    return currentUserId;
  }

}
