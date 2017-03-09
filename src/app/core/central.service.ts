// import {PathNodes, FragmentsHelpers, PathNode} from "./central.service.interface"
// import { FragmentsHelpers, PathNode} from "./central.service.interface"
import { Injectable } from '@angular/core';
/*import {Observable, Subject} from "rxjs";
import {NavigationExtras, Router} from "@angular/router";

import {PathNodes, PathNode} from "./path-node.interface";
import {ContentLoadService} from "./content-load.service";

import {FragmentsHelpers} from "./central-service-helpers.interface";*/

@Injectable()
export class CentralService {

/*  private pathNodesSubject = new Subject<PathNodes>();
  public pathNodes$ = this.pathNodesSubject.asObservable();

  private pathNodes: PathNodes;
  public userId;
  private isOwner = true;
  private myPathNodes: PathNodes;*/


  constructor(
    // private contentLoadService: ContentLoadService,
    // private router: Router
  ) {

  }

/*  getNormalizedFragment(fragment:string){
    let normFragment = fragment.replace(/\/\/+/g, '/');
    return normFragment.replace(/\/$/g, '');
  }

  getFragmentsArray(normalizedFragment:string){
    return normalizedFragment.split('/');
  }

  getNodesArrays(fragmentsArray: any[]) {
    let fragmentsHelpers: FragmentsHelpers = <FragmentsHelpers>{};
    fragmentsHelpers.nodesCons = fragmentsArray.filter((ele, ind) => !(ind%2));
    fragmentsHelpers.nodesInds = fragmentsArray.filter((ele, ind) => ind%2).map(index=>+index);
    return fragmentsHelpers;
  }

  getPathNodes(fragment:string, dwNodes?: any[]) {

    dwNodes = dwNodes ? dwNodes : [];

    let normalizedFragment = this.getNormalizedFragment(fragment);
    let fragmentsArray = this.getFragmentsArray(normalizedFragment);

    let fragmentsHelpers = this.getNodesArrays(fragmentsArray);
    let pathNodes1 = this.getPathNodesFRA(dwNodes, fragmentsHelpers.nodesCons, fragmentsHelpers.nodesInds);

    this.buildFragmentsForPathNodes(pathNodes1);
    // console.log('this.pathNodesSubject.next', pathNodes1);
    // debugger;
    this.pathNodesSubject.next(pathNodes1);
    return pathNodes1;
  }

  buildFragmentsForPathNodes(pathNodes: PathNodes) {
    let fragment = '';
    pathNodes.forEach(
      pathNode => {
        fragment += fragment ? '/' : '';
        fragment += pathNode.type ? pathNode.type : '';
        //todo decide if dwNodesFragment makes sense.
        //pathNode.dwNodesFragment = fragment;
        fragment += (pathNode.selectedIndex !== undefined) ? '/' + pathNode.selectedIndex : '';
        pathNode.fragment = fragment;
      }
    );
  }

  getPathNodesFRA(dwNodes, nodesCons: string[], nodesInds: number[], pathNodes?: PathNodes, pi?: number) {
    // 'use strict';
    pi = (pi !== undefined) ? pi + 1 : 0;   //pi...pathIndex (=pathLevel)
    var pathNodes = pathNodes ? pathNodes : <PathNodes>[];
    // var fragment = fragment ? pathNodes : '';
    // var partialFragment = pf[pi].type;

    if (pi === nodesCons.length || !dwNodes) {
      // pathNodes.push(getSinglePathNode());
      // console.log('pathNodesBeforeReturn', pathNodes);
      this.myPathNodes = pathNodes;
      return pathNodes;
    } else {
      let selectedNodeIndex = nodesInds[pi];
      let selectedNode = dwNodes[selectedNodeIndex];

      let partialRoute = nodesCons[pi];

      let newPathNode: PathNode = this.getSinglePathNode(dwNodes, partialRoute, selectedNodeIndex);
      pathNodes.push(newPathNode);

      if (!selectedNode) {
        // return pathNodes;
        this.getPathNodesFRA(undefined, nodesCons, nodesInds,pathNodes, pi);
      } else {
        let conNodeProp = nodesCons[pi+1];
        let newDwNodes = selectedNode[conNodeProp];
        this.getPathNodesFRA(newDwNodes, nodesCons, nodesInds,pathNodes, pi);
      }
      return pathNodes;
    }
  }

  getSinglePathNode(dwNodes, partialRoute, selectedNodeIndex):PathNode {
    var pathItem = {type: partialRoute, dwNodes: dwNodes, selectedIndex: selectedNodeIndex};
    return pathItem;
  }


  navigate(url: string, fragment: string) {
    let navigationExtras: NavigationExtras = {
      // queryParams: { 'session_id': sessionId },
      fragment: fragment
    };

    this.router.navigate(['/user-link'], navigationExtras);
  }*/
}
