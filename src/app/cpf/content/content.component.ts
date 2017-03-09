import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from './content.service';

@Component({
  selector: 'cpf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ContentService]
})
export class ContentComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private contentService: ContentService
  ) { }

  ngOnInit() {
    const content$ = this.contentService.getUserContent('test2');

    console.log('content$: ', content$);
    content$.subscribe(
      userDb => {
        // this.userDb = userDb;
        const projects = userDb.projects;
        console.log('projects: ', projects);
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
          const pathString = this.replaceActionFromFragment(fragment);

          console.log('userId: ', userId);
          console.log('pathString: ', pathString);
          // if (userId !== this.userId) {
          //   this.userId = userId;
          //   this.loadProject();
          // } else {
          //   this.centralService.getPathNodes(this.fragment, this.projects);
          // }

        }
      );
  }

  getUserId(fragment: String): String {
    // this.userId = fragment.match(/^(.+?)\//g)[0];
    return fragment ? fragment.slice(0, fragment.indexOf('/')) : '';
  }

  replaceActionFromFragment(fragment: String): String {
    return fragment ? fragment.replace(/^.+?\//, '') : '';
  }
}
