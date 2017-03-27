import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FirebaseService } from '../../core/firebase.service';

@Injectable()
export class ContentService {

  constructor(
    private firebaseService: FirebaseService
  ) { }

  getUserContent(userId: string): Observable<any> {
    return this.firebaseService.getUserContent(userId);
  }
}
