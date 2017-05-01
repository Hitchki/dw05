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

  public saveUserContent(userId: string, data: any): any {
    const tmp = this.db.object(userId).set(data);
    return tmp;
    // return this.db.object(userId).set(data);
  }

  public saveProjects(userId: string, data: any): any {
    // return Observable.fromPromise(this.db.object(userId).set('abcd'));
    return this.db.object(userId).set(data);
    // return this.db.list(userId);
    // return Observable.from(['observable in firebase-load-service from User: ' + userId]);
  }

}
