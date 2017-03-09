import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LOAD_USER_CONTENT_ACTION, UserContentLoadedAction } from '../actions';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CentralService } from '../../core/central.service';

@Injectable()
export class LoadContentEffectService {

  @Effect() userProjects$: Observable<Action> = this.actions$
    .ofType(LOAD_USER_CONTENT_ACTION)
    // .debug("action received!!!!!!!")
    // .switchMap(action => this.centralService.pathNodes$)
    // .debug("data received via the HTTP request xxxxxxx")
    // .map(pathNodes => new UserContentLoadedAction(pathNodes) );
  constructor(private actions$: Actions, private centralService: CentralService) { }

}
