import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  public getUserContent(userId: string): Observable<any> {
    return this.db.object(userId);
  }
}
