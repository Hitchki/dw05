import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { ApplicationState } from '../store/application-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'cpf-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css']
})
export class CpfComponent implements OnInit {

  // constructor(private route: ActivatedRoute,
  //             private store: Store<ApplicationState>
  // ) { }

  constructor(private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.route.params.subscribe(console.log.bind(this, 'params: '));
    this.route.fragment.subscribe(
      console.log.bind(this, 'fragment1: '),
      error => alert(error),
      () => alert('fragment-completed')
    );
    this.route.data.subscribe(
      console.log.bind(this, 'data: '),
      error => alert(error),
      () => alert('data-completed')
    );

    // this.route.url.subscribe(console.log.bind(this, 'url: '));

    // Observable.combineLatest(this.route.fragment, this.route.data)
    //   .subscribe(console.log.bind(this, 'combineLatest: '));
  }

  getUserId(fragment: string): string {
    // this.userId = fragment.match(/^(.+?)\//g)[0];
    return fragment ? fragment.slice(0, fragment.indexOf('/')) : '';
  }

  getUrlPath(fragment: string): string {
    return fragment ? fragment.slice(fragment.indexOf('/') + 1) : '';
  }

  replaceActionFromFragment(fragment: string): string {
    return fragment ? fragment.replace(/^.+?\//, '') : '';
  }

}
