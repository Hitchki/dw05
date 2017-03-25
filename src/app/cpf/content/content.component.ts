import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PathnodesService } from './pathnodes.service';
import { ApplicationState } from '../../store/application-state';
import { Store } from '@ngrx/store';

import { ContentStates, PathData, PathNodes, ContentVM, UiChange, AllContentData } from './content.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'cpf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private urlPath$: Observable<string>;
  private data$: Observable<any>;

  private pathNodes: PathNodes;
  private allDataContent: AllContentData;

  // private mainContentVM: ContentVM;
  // private navContentVM: ContentVM;
  // private navMoreContentVM: ContentVM;

  // userId$: Observable<string>;
  // urlPath$: Observable<string>;
  // data: Observable<any>;


  getAllContenData_old(urlPath, data) {
    if (urlPath && data.projects) {
      // debugger;
      console.log('zzz111this.pathNodes-urlPath', urlPath);
      console.log('zzz111this.pathNodes-data', data);
      this.pathNodes = this.pathnodesService.getPathNodes(urlPath, data);
    }
    return this.pathNodes;
  }

  getAllContenData(urlPath, data) {
    const allContentData = {
      navContent: undefined,
      navMoreContent: undefined,
      mainContent: undefined
    };
    if (urlPath && data.projects) {
      // debugger;

      console.log('zzz111this.pathNodes-urlPath', urlPath);
      console.log('zzz111this.pathNodes-data', data);
      this.pathNodes = this.pathnodesService.getPathNodes(urlPath, data);
      allContentData.navContent = this.pathNodes[0];
      allContentData.navMoreContent = this.pathNodes[2];
      allContentData.mainContent = this.pathNodes[2];
    }
    return allContentData;
  }

  allDataModel() {
    return state => state
      .map(([urlPath, data]) => this.getAllContenData(urlPath, data));
  }

  constructor(private pathnodesService: PathnodesService,
              private router: Router,
              private store: Store<ApplicationState>
  ) {
    // this.
    const currentUserId = store.select(this.userIdSelector)
      .subscribe(
        cu => {
          // console.log('x!!!!!!!currentUserId: ', cu);
        }
      );

    // const currentUserId = store.map(state => state.uiState.userId);
    this.urlPath$ = store.map(state => state.uiState.urlPath);
    this.data$ = store.map(state => state.storeData.content);

    const latest = this.urlPath$
      .withLatestFrom(this.data$)
      .map(([urlPath, data]) => this.getAllContenData(urlPath, data))
      .subscribe(
        pathNodes => console.log('SSSSSSSSSSSSsubscribe_pathNodes: ', pathNodes)
      );


    const latest1 = this.urlPath$
      .withLatestFrom(this.data$)
      .let(this.allDataModel())
      .subscribe(
        pathNodes => console.log('ÖÖÖÖÖSsubscribe_pathNodes: ', pathNodes)
      );

    // this.urlPath$.withLatestFrom(
    //   this.data$,
    //   (urlPath, data) => {
    //     // alert('abcd');
    //     // debugger;
    //
    //     if (urlPath && data.projects) {
    //       // debugger;
    //       console.log('yyyyyyyyythis.pathNodes-urlPath', urlPath);
    //       console.log('yyyyyyyyythis.pathNodes-data', data);
    //       this.pathNodes = pathnodesService.getPathNodes(urlPath, data);
    //     }
    //
    //     console.log('yyyyyyyyyyyyyyyyyyyythis.pathNodes', this.pathNodes);
    //     return this.pathNodes;
    //   }
    // ).map(
    //   pathNodes => pathNodes
    // )
    // .subscribe(
    //   pathNodes => console.log('subscribe_pathNodes: ', pathNodes)
    // );


    // const source3 = this.urlPath$.combineLatest(
    //   this.data$,
    //   // function (s1, s2) { return s1 + ', ' + s2; }
    //   (urlPath, data) => {
    //     alert('abcd');
    //     debugger;
    //     this.pathNodes = pathnodesService.getPathNodes(urlPath, data);
    //     console.log('yyyyyyyyyyyyyyyyyyyythis.pathNodes', this.pathNodes);
    //   }
    // );

    const source1 = this.urlPath$.withLatestFrom(
      this.data$,
      // function (s1, s2) { return s1 + ', ' + s2; }
      (urlPath, data) => {
        // alert('abcd');
        // debugger;

        console.log('yyyyyyyyythis.pathNodes-urlPath', urlPath);
        console.log('yyyyyyyyythis.pathNodes-data', data);

        if (urlPath && data.projects) {
          // debugger;
          this.pathNodes = pathnodesService.getPathNodes(urlPath, data);
        }

        console.log('yyyyyyyyyyyyyyyyyyyythis.pathNodes', this.pathNodes);
      }
    ).subscribe();

    // const source2 = this.data$.withLatestFrom(
    //   this.urlPath$,
    //   // function (s1, s2) { return s1 + ', ' + s2; }
    //   (data, urlPath) => {
    //     alert('abc');
    //     // debugger;
    //     // this.pathNodes = pathnodesService.getPathNodes(urlPath, data);
    //     console.log('yyyyyyyyyyyyyyyyyyyythis.pathNodes-urlPath', urlPath);
    //     console.log('yyyyyyyyyyyyyyyyyyyythis.pathNodes-data', data);
    //
    //   }
    // ).subscribe();

    // console.log('!currentUserId: ', currentUserId);
    // console.log('urlPath: ', urlPath);
    // console.log('data: ', data);
  }

    ngOnInit() {}

  userIdSelector(state: ApplicationState): string {

    const currentUserId = state.uiState.userId;
    //   currentParticipant = state.storeData.participants[currentUserId];
    //
    // if (!currentParticipant) {
    //   return "";
    // }

    return currentUserId;
  }

  newUrlPath(url) {
    // url = '/playground/angular-fire/';
    url = 'test2/projects/0/subprojects/1/normtext/0/normtext/1';
    // url = 'playground1 ';
    // http://localhost:4200/cpf#test2/projects/0/subprojects/1/normtext/0/normtext/0
    // alert(url);
    // debugger;
    // this.router.navigateByUrl(url)
    this.router.navigate(['cpf'], {fragment: url})
      .then( (result) => {
        if (!result) {
          // Hier kommt man hin, wenn sich nix geändert hat, auch nicht im Fragment!
          console.log(result);
          // alert(result);
        }
        console.log('result navigateByUrl', result);
      })
      .catch(err => alert(err));
  }

}
