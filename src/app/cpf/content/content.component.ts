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

  private urlPath$: Observable<string>;
  private data$: Observable<any>;

  // private mainContentVM: ContentVM;
  // private navContentVM: ContentVM;
  // private navMoreContentVM: ContentVM;

  // userId$: Observable<string>;
  // urlPath$: Observable<string>;
  // data: Observable<any>;

  constructor(private pathnodesService: PathnodesService,
              private router: Router,
              private store: Store<ApplicationState>
  ) {
    // this.
    const currentUserId = store.select(this.userIdSelector)
      .subscribe(
        cu => {
          // console.log('x!!!!!!!currentUserId: ', cu);
        }
      );

    // const currentUserId = store.map(state => state.uiState.userId);
    this.urlPath$ = store.map(state => state.uiState.urlPath);
    this.data$ = store.map(state => state.storeData.content);

    // console.log('!currentUserId: ', currentUserId);
    // console.log('urlPath: ', urlPath);
    // console.log('data: ', data);
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

  newUrlPath(url) {
    // url = '/playground/angular-fire/';
    url = 'test2/projects/0/subprojects/1/normtext/0/normtext/1';
    // url = 'playground1 ';
    // http://localhost:4200/cpf#test2/projects/0/subprojects/1/normtext/0/normtext/0
    // alert(url);
    // debugger;
    // this.router.navigateByUrl(url)
    this.router.navigate(['cpf'], {fragment: url})
      .then( (result) => {
        if (!result) {
          // Hier kommt man hin, wenn sich nix geändert hat, auch nicht im Fragment!
          console.log(result);
          // alert(result);
        }
        console.log('result navigateByUrl', result);
      })
      .catch(err => alert(err));
  }

}
