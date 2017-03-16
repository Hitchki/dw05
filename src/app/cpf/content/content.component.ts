import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from './content.service';
import { ApplicationState } from '../../store/application-state';
import { Store } from '@ngrx/store';
import {
  TestAction, UserContentLoadedAction, PathStringChangedAction,
  ContentStatesChangedAction
} from '../../store/actions';
import { ContentStates, PathData, PathNodes, ContentVM, UiChange } from './content.interfaces'

@Component({
  selector: 'cpf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ContentService]
})
export class ContentComponent implements OnInit {

  private pathNodesString: string;
  private mainContentVM: ContentVM;
  private navContentVM: ContentVM;
  private navMoreContentVM: ContentVM;

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
        this.store.dispatch( new UserContentLoadedAction(pathNodes));
        
        console.log('CONTENT: ', content);
        console.log('!!!!pathNodes!!!!: ', pathNodes);

        const contentStates: ContentStates = this.getContentStates(pathNodes);
        this.store.dispatch( new ContentStatesChangedAction(contentStates));

        this.mainContentVM = contentStates.mainContent;
        this.navContentVM = contentStates.navContent;
        this.navMoreContentVM = contentStates.navMoreContent;

        console.log('!!!!ContentStatesChangedAction!!!! contentStates: ', contentStates);
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

  getContentStates(pathNodes: PathNodes, cpfAction?: string, isEditMode?: boolean) {
    const contentStates: ContentStates = {
      navContent: this.getNavState(pathNodes),
      navMoreContent: this.getNavMoreState(pathNodes),
      mainContent: this.getMainState(pathNodes),
    };

    return contentStates;
  }

  getNavState(pathNodes: PathNodes, cpfAction?: string, isEditMode?: boolean): ContentVM {
    return {
      pathData: {
        pathNodes: pathNodes,
        selectedPathNodeIndex: 0,
        selectedPathNode: pathNodes[0]
      }
    };
  }

  getNavMoreState(pathNodes: PathNodes, cpfAction?: string, isEditMode?: boolean): ContentVM {
    // Momentan sind navMoreState und mainState gleich.
    return this.getMainState(pathNodes, cpfAction, isEditMode);
  }

  getMainState(pathNodes: PathNodes, cpfAction?: string, isEditMode?: boolean): ContentVM {
    let mainState;

    if (pathNodes.length = 3) {
      mainState = {
        pathData: {
          pathNodes: pathNodes,
          selectedPathNodeIndex: pathNodes.length - 1,
          selectedPathNode: pathNodes[pathNodes.length - 1]
        }
      };
    }  else if (pathNodes.length > 3) {
        mainState = {
          pathData: {
            pathNodes: pathNodes,
            selectedPathNodeIndex: pathNodes.length - 2,
            selectedPathNode: pathNodes[pathNodes.length - 2]
          }
        };

    }  else {
      mainState = undefined;
    };

    return mainState;
  }

  getAllData () {
    this.route.fragment
    // .do(console.log.bind(this, 'fragment'))
      .subscribe(
        fragment => {

          const userId = this.getUserId(fragment);
          this.pathNodesString = this.replaceActionFromFragment(fragment);

          this.store.dispatch( new PathStringChangedAction(this.pathNodesString));

          console.log('userId: ', userId);
          console.log('xxxxxxxxxxxxxxxxxxxxxxpathNodesString: ', this.pathNodesString);
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

  uiChange(uichange: UiChange) {
    // alert(uichange);
  }
}
