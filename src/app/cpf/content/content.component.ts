import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from './content.service';
import { ApplicationState } from '../../store/application-state';
import { Store } from '@ngrx/store';
import { TestAction } from '../../store/actions';

@Component({
  selector: 'cpf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ContentService]
})
export class ContentComponent implements OnInit {

  private pathNodesString: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private contentService: ContentService,
              private store: Store<ApplicationState>
  ) { }

  ngOnInit() {
    const content$ = this.contentService.getUserContent('test2');

    this.store.subscribe(store => console.log('store!!!: ', store));

    console.log('content$: ', content$);
    content$.subscribe(
      userDb => {
        // this.userDb = userDb;
        // const content = userDb.projects;

        const content = userDb;
        this.store.dispatch( new TestAction(content));

        const pathNodes  = this.contentService.getPathNodes(this.pathNodesString, content);

        // $pathNodes.su
        console.log('CONTENT: ', content);
        console.log('!!!!pathNodes!!!!: ', pathNodes);
      }
    );

      // .ofType(LOAD_USER_CONTENT_ACTION);
    // .debug("action received!!!!!!!")
    // .switchMap(action => this.centralService.pathNodes$)
    // .debug("data received via the HTTP request xxxxxxx")
    // .map(pathNodes => new UserContentLoadedAction(pathNodes) );

    console.log('content: ', );

    this.route.params.subscribe(console.log.bind(this, 'params: '));
    // this.route.fragment.subscribe(console.log);
    this.route.data.subscribe(console.log.bind(this, 'data: '));

    this.getAllData();
  }

  getAllData () {
    this.route.fragment
    // .do(console.log.bind(this, 'fragment'))
      .subscribe(
        fragment => {

          const userId = this.getUserId(fragment);
          this.pathNodesString = this.replaceActionFromFragment(fragment);
          console.log('userId: ', userId);
          console.log('pathNodesString: ', this.pathNodesString);
          // if (userId !== this.userId) {
          //   this.userId = userId;
          //   this.loadProject();
          // } else {
          //   this.centralService.getPathNodes(this.fragment, this.projects);
          // }

        }
      );
  }

  getUserId(fragment: string): string {
    // this.userId = fragment.match(/^(.+?)\//g)[0];
    return fragment ? fragment.slice(0, fragment.indexOf('/')) : '';
  }

  replaceActionFromFragment(fragment: string): string {
    return fragment ? fragment.replace(/^.+?\//, '') : '';
  }
}
