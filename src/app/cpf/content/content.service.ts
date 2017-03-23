import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { FirebaseService } from '../../core/firebase.service';
import { PathNodesStringsHelpers } from './content-service-helpers.interface';
import { PathNodes, PathNode } from './content.interfaces';

@Injectable()
export class ContentService {

  private pathNodesSubject = new Subject<PathNodes>();

  constructor(
    private firebaseService: FirebaseService
  ) { }

  getUserContent(userId: string): Observable<any> {
    return this.firebaseService.getUserContent(userId);
  }
}
