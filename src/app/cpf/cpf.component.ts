import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { ApplicationState } from '../store/application-state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store'
import { ApplicationState } from '../store/application-state'
import { UserChangedAction } from '../store/actions'

@Component({
  selector: 'cpf-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css']
})
export class CpfComponent implements OnInit {

  private userId: string = undefined;

  constructor(private route: ActivatedRoute,
              private store: Store<ApplicationState>
  ) { }

  // constructor(private route: ActivatedRoute
  // ) { }

  ngOnInit() {
    // this.route.params.subscribe(console.log.bind(this, 'params: '));
    this.route.fragment.subscribe(
      (fragment) => {
        console.log('fragment1: ', fragment);
        this.fragmentChanged(fragment);
        // this.store.dispatch( new UserChangedAction(fragment));
      } ,
      error => alert(error),
      () => alert('fragment-completed')
    );

    this.route.data.subscribe(
      console.log.bind(this, 'data: '),
      error => alert(error),
      () => alert('data-completed')
    );

    // this.route.url.subscribe(console.log.bind(this, 'url: '));

/*    Observable.combineLatest(this.route.fragment, this.route.data)
      .subscribe(
        (fragment) => {
          console.log('fragment1: ', fragment);
          this.store.dispatch( new UserChangedAction(fragment));
        } ,
        error => alert(error),
        () => alert('fragment-completed')
      );*/
  }

  fragmentChanged(fragment: string): void {
    const userId = this.getUserId(fragment);

    const changedUserStateData = {
      userId: this.getUserId(fragment),
      urlPath: this.getUrlPath(fragment)
    };

    if (userId !== this.userId) {
      this.userId = userId;
      this.store.dispatch( new UserChangedAction(changedUserStateData));
    } else {
        ;
    }

  }

  getUserId(fragment: string): string {
    // this.userId = fragment.match(/^(.+?)\//g)[0];
    return fragment ? fragment.slice(0, fragment.indexOf('/')) : '';
  }

  getUrlPath(fragment: string): string {
    return fragment ? fragment.slice(fragment.indexOf('/') + 1) : '';
  }

  // replaceActionFromFragment(fragment: string): string {
  //   return fragment ? fragment.replace(/^.+?\//, '') : '';
  // }

}
