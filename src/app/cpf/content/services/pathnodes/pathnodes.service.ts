import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';

// import { FirebaseService } from '../../../core/firebase.service';
import { PathHelpers } from './pathnodes-service-helpers.interface';
import { PathNodes, PathNode } from '../../content.interfaces';

@Injectable()
export class PathnodesService {

  // private pathNodesSubject = new Subject<PathNodes>();

  constructor(
    // private firebaseService: FirebaseService
  ) { }

  // public getUserContent(userId: string): Observable<any> {
  //   return this.firebaseService.getUserContent(userId);
  // }

  getNormPathNodesString(pathNodesString: string) {
    const normPathNodesString = pathNodesString.replace(/\/\/+/g, '/');
    return normPathNodesString.replace(/\/$/g, '');
  }

  getPathStringsArray(normPathNodesString: string) {
    return normPathNodesString.split('/');
  }

  getNodesArrays(pathStringsArray: any[]) {
    const pathHelpers: PathHelpers = <PathHelpers>{};
    pathHelpers.typesArray = pathStringsArray.filter((ele, ind) => !(ind % 2));
    pathHelpers.indexArray = pathStringsArray.filter((ele, ind) => ind % 2).map(index => +index);
    return pathHelpers;
  }

  buildUrlPaths(pathNodes: PathNodes, userId?: string, databaseURL?: string) {
    let pathNodesString = '';
    pathNodes.forEach(
      pathNode => {
        pathNodesString += pathNodesString ? '/' : '';
        pathNodesString += pathNode.type ? pathNode.type : '';
        // todo decide if cpfNodesPathNodesString makes sense.
        // pathNode.cpfNodesPathNodesString = pathNodesString;
        pathNodesString += (pathNode.selectedIndex !== undefined) ? '/' + pathNode.selectedIndex : '';
        pathNode.urlPath = userId ? `${userId}/${pathNodesString}` : pathNodesString ;
        pathNode.firePath = databaseURL ? `${databaseURL}/${pathNode.urlPath}` : pathNode.urlPath ;
      }
    );
  }

  getBasePathNodes(cpfNodes, typesArray: string[], indexArray: number[]) {

    let localCpfNodes = cpfNodes;
    const pathNodes: PathNodes = [];
    let selectedNode;

    typesArray.map(
      (type, arraysIndex) => {
        localCpfNodes = localCpfNodes[type];

        let selectedNodeIndex = indexArray[arraysIndex];

        if (localCpfNodes) {
          selectedNode = localCpfNodes[selectedNodeIndex];

          const newPathNode: PathNode = this.getSingleBasePathNode(localCpfNodes, type, selectedNodeIndex);
          pathNodes.push(newPathNode);

          localCpfNodes = selectedNode;
        } else {
          selectedNodeIndex = undefined;
          console.info(`pathUrl was to long - 
                  selectedNodeIndex was set to undefined instead of ${selectedNodeIndex}`);
        }
      }
    );
    return pathNodes;
  }

  getSingleBasePathNode(cpfNodes, type, selectedNodeIndex): PathNode {
    return {type: type, cpfNodes: cpfNodes, selectedIndex: selectedNodeIndex};
  }

  getPathNodes(pathNodesString: string, cpfNodes?: any[], userId?: string, databaseURL?: string) {

    cpfNodes = cpfNodes ? cpfNodes : [];

    const normPathNodesString = this.getNormPathNodesString(pathNodesString);
    const pathStringsArray = this.getPathStringsArray(normPathNodesString);
    const pathHelpers = this.getNodesArrays(pathStringsArray);
    const pathNodes = this.getBasePathNodes(cpfNodes, pathHelpers.typesArray, pathHelpers.indexArray);

    this.buildUrlPaths(pathNodes, userId, databaseURL);
    // this.pathNodesSubject.next(pathNodes);
    return pathNodes;
  }

}
