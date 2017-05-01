import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PathnodesService } from './services/pathnodes/pathnodes.service';
import { ApplicationState } from '../../store/application-state';
import { Store } from '@ngrx/store';

/* tslint:disable:no-access-missing-member */
import { AllContentData } from './content.interfaces';
import { PathNodes, UiChange } from './content.interfaces';

import { Observable } from 'rxjs';
import { AllContentService } from './services/all-content/all-content.service';
import { ContentService } from './content.service'

@Component({
  selector: 'cpf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public urlPath$: Observable<string>;
  public data$: Observable<any>;

  private pathNodes: PathNodes;
  public allContentData$: Observable<AllContentData>;

  public userIdToSave = '_prototext';

  getAllContentData(urlPath, data) {
    return this.allContentService.getAllContentData(urlPath, data, 'prototext3', 'https://denkwelten.firebaseio.com');
  }

  allDataModel() {
    return state => state
      .map(([urlPath, data]) => this.getAllContentData(urlPath, data));
  }

  constructor(private pathnodesService: PathnodesService,
              private contentService: ContentService,   // nur gebraucht für onSave/saveUserContent
              private allContentService: AllContentService,
              private router: Router,
              private store: Store<ApplicationState>
  ) {
    const currentUserId = store.select(this.userIdSelector)
      .subscribe(
        cu => {
          // console.log('x!!!!!!!currentUserId: ', cu);
        }
      );

    // const currentUserId = store.map(state => state.uiState.userId);
    this.urlPath$ = store.map(state => state.uiState.urlPath);
    this.data$ = store.map(state => state.storeData.content);

    this.allContentData$ = this.urlPath$
      .withLatestFrom(this.data$)
      .map(([urlPath, data]) => this.getAllContentData(urlPath, data));

      // .subscribe(
      //   // pathNodes => console.log('SSSSSSSSSSSSsubscribe_pathNodes: ', pathNodes)
      // );


    const latest1 = this.urlPath$
      .withLatestFrom(this.data$)
      .let(this.allDataModel())
      .subscribe(
      );

    const source1 = this.urlPath$.withLatestFrom(
      this.data$,
      // function (s1, s2) { return s1 + ', ' + s2; }
      (urlPath, data) => {

        if (urlPath && data.projects) {
          // debugger;
          this.pathNodes = pathnodesService.getPathNodes(urlPath, data);
        }
      }
    ).subscribe();

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
    url = 'prototext/projects/0/subprojects/1/normtext/0/normtext/1';
    // url = 'playground1 ';
    // http://localhost:4200/cpf#prototext/projects/0/subprojects/1/normtext/0/normtext/0
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


  onUiChange(urlPath: UiChange) {
    const fullUrlPath = `/cpf#${urlPath}`;

    // const fullUrlPath = `/cpf#urlPath`;
    // alert('urlPath: ' + fullUrlPath);
    this.router.navigateByUrl(fullUrlPath)
      // .then(result => console.log('xxxxxxxxxxxxxxxxxresult', result),
      //       (err) => {debugger;  console.log('xxxxxxxxxxxxxerr', err); });
      .then(result => console.log('result', result))
      .catch(err => {debugger;  console.debug('ACHTUNG, es ist ein Fehler aufgetreten: ', err); });
  }

  onSave() {
    console.log('pathNodes to save', this.pathNodes);
    this.contentService.saveUserContent(this.userIdToSave, { projects: this.pathNodes[0].cpfNodes}) ;
  }
}





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
