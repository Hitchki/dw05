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

  private getPaths(type: string, selectedIndex: number, oldUrlPath: string, oldFirePath: string): [string, string, string] {

    const urlBasePath  = `${oldUrlPath}/${type}`;
    const urlPath  = (selectedIndex !== undefined) ? `${oldUrlPath}/${type}/${selectedIndex}`  : `${oldUrlPath}/${type}`;
    const firePath = (selectedIndex !== undefined) ? `${oldFirePath}/${type}/${selectedIndex}` : `${oldFirePath}/${type}`;

    return [urlPath, firePath, urlBasePath];
  }

  private getBasePathNodes(cpfNodes, typesArray: string[], indexArray: number[], userId: string, databaseUrl: string) {
    const pathNodes: PathNodes = [];

    // if (userId) {
      /* traversedCpfNodes ist eine Art Zeiger auf das derzeit "aktive" firePath-Element.
       * Beginnend mit dem Root-Knoten wird das Dokument entlang des pathUrls abgearbeitet. */
      let traversedCpfNodes = cpfNodes;
      let selectedNode;
      let selectedIndex;

      let urlPath = userId;
      let urlBasePath = userId;
      let firePath = databaseUrl;

      typesArray.map(
        (type, arraysIndex) => {

          traversedCpfNodes = traversedCpfNodes[type];

          if (!traversedCpfNodes) {
            console.log(`pathUrl was to long - and shortende to ${selectedIndex}`);
          } else {

            selectedIndex = indexArray[arraysIndex];
            selectedNode = traversedCpfNodes[selectedIndex];

            if (!selectedNode) {
              selectedIndex = undefined;
              console.log(`pathUrl was to long - selectedIndex ${selectedIndex} is no valid data section`);
            }

            [urlPath, firePath, urlBasePath] = this.getPaths(type, selectedIndex, urlPath, firePath);
            const newPathNode: PathNode = this.getSingleBasePathNode(traversedCpfNodes, type, selectedIndex, urlBasePath, urlPath, firePath);
            pathNodes.push(newPathNode);

            traversedCpfNodes = selectedNode;
          }
        }
      );
    // }
    return pathNodes;
  }

  private getSingleBasePathNode(cpfNodes, type, selectedNodeIndex, urlBasePath, urlPath, firePath): PathNode {
    return {
      type: type,
      cpfNodes: cpfNodes,
      selectedIndex: selectedNodeIndex,
      urlBasePath: urlBasePath,
      urlPath: urlPath,
      firePath: firePath + '.json',
      urlPathNeu: urlPath,
      firePathNeu: firePath + '.json'
    };
  }

  public getPathNodes(pathNodesString: string, cpfNodes?: any[], userId?: string, databaseURL?: string) {

    cpfNodes = cpfNodes ? cpfNodes : [];

    const normPathNodesString = this.getNormPathNodesString(pathNodesString);
    const pathStringsArray = this.getPathStringsArray(normPathNodesString);
    const [typesArray, indexArray] = this.getNodesArrays(pathStringsArray);
    const pathNodes = this.getBasePathNodes(cpfNodes, typesArray, indexArray, userId, databaseURL);

    // this.buildUrlPaths(pathNodes, userId, databaseURL);
    return pathNodes;
  }

}
