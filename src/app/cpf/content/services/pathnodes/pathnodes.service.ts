import { Injectable } from '@angular/core';

import { PathNodes, PathNode } from '../../content.interfaces';

@Injectable()
export class PathnodesService {

  constructor(
  ) { }

  private getNormPathNodesString(pathNodesString: string) {
    const normPathNodesString = pathNodesString.replace(/\/\/+/g, '/');
    return normPathNodesString.replace(/\/$/g, '');
  }

  private getPathStringsArray(normPathNodesString: string) {
    return normPathNodesString.split('/');
  }

  private getNodesArrays(pathStringsArray: any[]) {
    const typesArray = pathStringsArray.filter((ele, ind) => !(ind % 2));
    const indexArray = pathStringsArray.filter((ele, ind) => ind % 2).map(index => +index);
    return [typesArray, indexArray];
  }

  private buildUrlPaths(pathNodes: PathNodes, userId?: string, databaseURL?: string) {
    let pathNodesString = '';
    pathNodes.forEach(
      pathNode => {
        pathNodesString += pathNodesString ? '/' : '';
        pathNodesString += pathNode.type ? pathNode.type : '';
        // todo decide if cpfNodesPathNodesString makes sense.
        // pathNode.cpfNodesPathNodesString = pathNodesString;
        pathNodesString += (pathNode.selectedIndex !== undefined) ? '/' + pathNode.selectedIndex : '';
        pathNode.urlPath = userId ? `${userId}/${pathNodesString}` : pathNodesString ;
        pathNode.firePath = databaseURL ? `${databaseURL}/${pathNode.urlPath}.json` : `pathNode.urlPath.json` ;
      }
    );
  }

  private getPaths(type: string, selectedIndex: number): [string, string] {
    let urlPath = '';
    let firePath = '';

    urlPath  = selectedIndex ? `${urlPath}\${type}\${+selectedIndex}`  : `${urlPath}\${type}`;
    firePath = selectedIndex ? `${firePath}\${type}\${+selectedIndex}` : `${firePath}\${type}`;

    return [urlPath, firePath];
  }

  private getBasePathNodes(cpfNodes, typesArray: string[], indexArray: number[]) {

    /* traversedCpfNodes ist eine Art Zeiger auf das derzeit "aktive" firePath-Element.
    * Beginnend mit dem Root-Knoten wird das Dokument entlang des pathUrls abgearbeitet. */
    let traversedCpfNodes = cpfNodes;
    const pathNodes: PathNodes = [];
    let selectedNode;
    let selectedIndex;

    let urlPath = '';
    let firePath = '';

    typesArray.map(
      (type, arraysIndex) => {

        traversedCpfNodes = traversedCpfNodes[type];

        if (traversedCpfNodes) {
          selectedIndex = indexArray[arraysIndex];
          selectedNode = traversedCpfNodes[selectedIndex];

          if (selectedNode) {
            [urlPath, firePath]  = this.getPaths(type, selectedIndex);
          }

          const newPathNode: PathNode = this.getSingleBasePathNode(traversedCpfNodes, type, selectedIndex);
          pathNodes.push(newPathNode);

          traversedCpfNodes = selectedNode;
        } else {
          // selectedIndex = undefined;
          console.info(`pathUrl was to long - 
                  selectedIndex was set to undefined instead of ${selectedIndex}`);
        }
      }
    );
    return pathNodes;
  }

  private getSingleBasePathNode(cpfNodes, type, selectedNodeIndex): PathNode {
    return {type: type, cpfNodes: cpfNodes, selectedIndex: selectedNodeIndex};
  }

  public getPathNodes(pathNodesString: string, cpfNodes?: any[], userId?: string, databaseURL?: string) {

    cpfNodes = cpfNodes ? cpfNodes : [];

    const normPathNodesString = this.getNormPathNodesString(pathNodesString);
    const pathStringsArray = this.getPathStringsArray(normPathNodesString);
    const [typesArray, indexArray] = this.getNodesArrays(pathStringsArray);
    const pathNodes = this.getBasePathNodes(cpfNodes, typesArray, indexArray);

    this.buildUrlPaths(pathNodes, userId, databaseURL);
    return pathNodes;
  }

}
