import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { FirebaseService } from '../../core/firebase.service';
import { PathNodesStringsHelpers } from './content-service-helpers.interface';
import { PathNodes, PathNode } from './content.interfaces';

@Injectable()
export class PathnodesService {

  private pathNodesSubject = new Subject<PathNodes>();

  constructor(
    private firebaseService: FirebaseService
  ) { }

  public getUserContent(userId: string): Observable<any> {
    return this.firebaseService.getUserContent(userId);
  }

  getNormalizedPathNodesString(pathNodesString: string) {
    const normPathNodesString = pathNodesString.replace(/\/\/+/g, '/');
    return normPathNodesString.replace(/\/$/g, '');
  }

  getPathNodesStringsArray(normalizedPathNodesString: string) {
    return normalizedPathNodesString.split('/');
  }

  getNodesArrays(pathNodesStringsArray: any[]) {
    const pathNodesStringsHelpers: PathNodesStringsHelpers = <PathNodesStringsHelpers>{};
    pathNodesStringsHelpers.pathTypesArray = pathNodesStringsArray.filter((ele, ind) => !(ind % 2));
    pathNodesStringsHelpers.pathIndexArray = pathNodesStringsArray.filter((ele, ind) => ind % 2).map(index => +index);
    return pathNodesStringsHelpers;
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

  getPathNodesFRA(cpfNodes, pathTypesArray: string[], pathIndexArray: number[]) {

    let localCpfNodes = cpfNodes;
    const pathNodes: PathNodes = [];
    let selectedNode;

    pathTypesArray.map(
      (type, arraysIndex) => {
        localCpfNodes = localCpfNodes[type];

        const selectedNodeIndex = pathIndexArray[arraysIndex];

        selectedNode = localCpfNodes[selectedNodeIndex];
        const newPathNode: PathNode = this.getSinglePathNode(localCpfNodes, type, selectedNodeIndex);
        pathNodes.push(newPathNode);

        localCpfNodes = selectedNode;
      }
    );
    return pathNodes;
  }

  getSinglePathNode(cpfNodes, type, selectedNodeIndex): PathNode {
    return {type: type, cpfNodes: cpfNodes, selectedIndex: selectedNodeIndex};
  }

  getPathNodes(pathNodesString: string, cpfNodes?: any[]) {

    cpfNodes = cpfNodes ? cpfNodes : [];

    const normalizedPathNodesString = this.getNormalizedPathNodesString(pathNodesString);
    const pathNodesStringsArray = this.getPathNodesStringsArray(normalizedPathNodesString);
    const pathNodesStringsHelpers = this.getNodesArrays(pathNodesStringsArray);
    const pathNodes = this.getPathNodesFRA(cpfNodes, pathNodesStringsHelpers.pathTypesArray, pathNodesStringsHelpers.pathIndexArray);

    this.buildPathNodesStringsForPathNodes(pathNodes);
    this.pathNodesSubject.next(pathNodes);
    return pathNodes;
  }

}
