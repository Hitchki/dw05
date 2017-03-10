// import {PathNodes, FragmentsHelpers, PathNode} from "./central.service.interface"
// import { FragmentsHelpers, PathNode} from "./central.service.interface"
import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {NavigationExtras, Router} from "@angular/router";

import {PathNodes, PathNode} from "./path-node.interface";
import {ContentLoadService} from "./content-load.service";

import {FragmentsHelpers} from "./content-service-helpers.interface";

@Injectable()
export class CentralService {

  private pathNodesSubject = new Subject<PathNodes>();
  public pathNodes$ = this.pathNodesSubject.asObservable();

  private pathNodes: PathNodes;
  public userId;
  private isOwner = true;
  private myPathNodes: PathNodes;


  constructor(
    private contentLoadService: ContentLoadService,
    private router: Router
  ) {

  }

  getNormalizedFragment(pathNodesString: string){
    const normPathNodesString = pathNodesString.replace(/\/\/+/g, '/');
    return normPathNodesString.replace(/\/$/g, '');
  }

  getPathNodesStringsArray(normalizedPathNodesString: string){
    return normalizedPathNodesString.split('/');
  }

  getNodesArrays(pathNodesStringsArray: any[]) {
    const pathNodesStringsHelpers: PathNodesStringsHelpers = <PathNodesStringsHelpers>{};
    pathNodesStringsHelpers.pathTypesArray = pathNodesStringsArray.filter((ele, ind) => !(ind % 2));
    pathNodesStringsHelpers.pathIndexArray = pathNodesStringsArray.filter((ele, ind) => ind % 2).map(index => +index);
    return pathNodesStringsHelpers;
  }

  getPathNodes(pathNodesString: string, cpfNodes?: any[]) {

    cpfNodes = cpfNodes ? cpfNodes : [];

    const normalizedPathNodesString = this.getNormalizedPathNodesString(pathNodesString);
    const pathNodesStringsArray = this.getPathNodesStringsArray(normalizedPathNodesString);

    const pathNodesStringsHelpers = this.getNodesArrays(pathNodesStringsArray);
    const pathNodes1 = this.getPathNodesFRA(cpfNodes, pathNodesStringsHelpers.pathTypesArray, pathNodesStringsHelpers.pathIndexArray);

    this.buildPathNodesStringsForPathNodes(pathNodes1);
    // console.log('this.pathNodesSubject.next', pathNodes1);
    // debugger;
    this.pathNodesSubject.next(pathNodes1);
    return pathNodes1;
  }

  buildPathNodesStringsForPathNodes(pathNodes: PathNodes) {
    let pathNodesString = '';
    pathNodes.forEach(
      pathNode => {
        pathNodesString += pathNodesString ? '/' : '';
        pathNodesString += pathNode.type ? pathNode.type : '';
        // todo decide if cpfNodesPathNodesString makes sense.
        // pathNode.cpfNodesPathNodesString = pathNodesString;
        pathNodesString += (pathNode.selectedIndex !== undefined) ? '/' + pathNode.selectedIndex : '';
        pathNode.pathNodesString = pathNodesString;
      }
    );
  }

  getPathNodesFRA(cpfNodes, pathTypesArray: string[], pathIndexArray: number[], pathNodes?: PathNodes, pi?: number) {
    // 'use strict';
    pi = (pi !== undefined) ? pi + 1 : 0;   //pi...pathIndex (=pathLevel)
    var pathNodes = pathNodes ? pathNodes : <PathNodes>[];
    // var pathNodesString = pathNodesString ? pathNodes : '';
    // var partialPathNodesString = pf[pi].type;

    if (pi === pathTypesArray.length || !cpfNodes) {
      // pathNodes.push(getSinglePathNode());
      // console.log('pathNodesBeforeReturn', pathNodes);
      this.myPathNodes = pathNodes;
      return pathNodes;
    } else {
      let selectedNodeIndex = pathIndexArray[pi];
      let selectedNode = cpfNodes[selectedNodeIndex];

      let partialRoute = pathTypesArray[pi];

      let newPathNode: PathNode = this.getSinglePathNode(cpfNodes, partialRoute, selectedNodeIndex);
      pathNodes.push(newPathNode);

      if (!selectedNode) {
        // return pathNodes;
        this.getPathNodesFRA(undefined, pathTypesArray, pathIndexArray,pathNodes, pi);
      } else {
        let conNodeProp = pathTypesArray[pi+1];
        let newDwNodes = selectedNode[conNodeProp];
        this.getPathNodesFRA(newDwNodes, pathTypesArray, pathIndexArray,pathNodes, pi);
      }
      return pathNodes;
    }
  }

  getSinglePathNode(cpfNodes, partialRoute, selectedNodeIndex):PathNode {
    var pathItem = {type: partialRoute, cpfNodes: cpfNodes, selectedIndex: selectedNodeIndex};
    return pathItem;
  }


  navigate(url: string, pathNodesString: string) {
    let navigationExtras: NavigationExtras = {
      // queryParams: { 'session_id': sessionId },
      pathNodesString: pathNodesString
    };

    this.router.navigate(['/user-link'], navigationExtras);
  }


  ////////////////////////////////////////////////////////

  //pathNodesString is without userId
  getPathNodesFromPathNodesString(pathNodesString)  {
    let partialPathNodesStrings = pathNodesString.split('/');
    this.pathNodes = partialPathNodesStrings.map((partFrag, i, partFrags) => {
      let partialPathNodesString = (i===0) ? partFrag : `${partFrag}/${partialPathNodesStrings[i-1]}`;
      return {partialPathNodesString: partialPathNodesString,
        userPathNodesString: `${this.userId}/${partialPathNodesString}`,
      };
    });

    //todo check if used somewhere
    // let pathTmps = this.pathNodes.map(
    //   pathNode => this.contentLoadService.loadNodeByUrl(pathNode.userPathNodesString)
    // );

  }

  saveByUserPathNodesString(pathNodesString) { }

  testTest() {
    let pa = [{editPathNodesString: 'vwl'}, {editPathNodesString: 'vwl/projects'}, {editPathNodesString: 'vwl/projects/0'}];
    // console.debug('testTest', pa);
    // console.table(pa);
    // let res = this.contentLoadService.loadNodeByUrl(pa[0].editPathNodesString);
    // res.subscribe(
    //   (result) => console.debug('result', result)
    // );

    const arraySource = Observable.from(pa);
    arraySource.subscribe(
      (result) => {
        console.debug('result', result);
        this.contentLoadService.loadNodeByUrl(result.editPathNodesString).subscribe(
          (data) => {
            console.debug('data', data);
          },
          (err) => console.error('err', err),
          () => console.debug('end')
        );
      }
    );

    // let erg: any[] = [];
    //
    // arraySource.flatMap(
    //   item => this.contentLoadService.loadNodeByUrl(item.editPathNodesString)
    // )
    // .combineAll()
    // .subscribe(
    //     data => {
    //       console.log('dataxxx', data);
    //       erg.unshift(erg);
    //     },
    //     (err) => console.error('err', err),
    //     () => console.debug('end')
    // );
  }
}
