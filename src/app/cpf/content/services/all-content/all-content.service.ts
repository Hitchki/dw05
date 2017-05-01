import { Injectable } from '@angular/core';
import { PathnodesService } from '../pathnodes/pathnodes.service';
import { AllContentData, PathNodes } from '../../content.interfaces';

@Injectable()
export class AllContentService {

  private pathNodes: PathNodes;

  constructor(private pathnodesService: PathnodesService) { }

  getContentPath(urlPath) {
    // todo urlPath
    const contentPath: string = urlPath.replace(/^projects\/.+?\/(subprojects\/.+?\/){0,1}/, '');
    // const contentPath: string = urlPath.replace(/^.+?\/projects\/.+?\/(subprojects\/.+?\/){0,1}/, '');
    return contentPath;
  }

  getDefaultPaths(urlPath) {
    // todo urlPath
    // debugger;
    if (urlPath.match(/^projects$/)) {
      urlPath = `${urlPath}/0/subprojects/0/normtext/0`;
    } else if (urlPath.match(/^projects\/$/)) {
      urlPath = `${urlPath}0/subprojects/0/normtext/0`;
    } else if (urlPath.match(/^projects\/\d+?$/)) {
      urlPath = `${urlPath}/subprojects/0/normtext/0`;
    } else if (urlPath.match(/^projects\/\d+?\/$/)) {
      urlPath = `${urlPath}subprojects/0/normtext/0`;
    } else if (urlPath.match(/^projects\/\d+?\/subprojects$/)) {
      urlPath = `${urlPath}/0/normtext/0`;
    } else if (urlPath.match(/^projects\/\d+?\/subprojects\/$/)) {
      urlPath = `${urlPath}0/normtext/0`;
    } else if (urlPath.match(/^projects\/\d+?\/subprojects\/\d+?$/)) {
      urlPath = `${urlPath}/normtext/0`;
    }

    // const contentPath: string = urlPath.replace(/^.+?\/projects\/.+?\/(subprojects\/.+?\/){0,1}/, '');
    return urlPath;
  }

  getAllContentData(urlPath: string, data, userId: string, fireUrlPrefix?: string): AllContentData {
    const allContentData = {} as AllContentData;

    if (urlPath && data.projects) {

      urlPath = this.getDefaultPaths(urlPath);

      // alert(urlPath);

      this.pathNodes = this.pathnodesService.getPathNodes(urlPath, data, userId, 'https://denkwelten.firebaseio.com');

      // debugger;
      allContentData.navContent = this.pathNodes[0];

      const pathNodeCount = this.pathNodes.length;

      console.log('!!!!this.pathNodes: ', this.pathNodes);
      console.log('!!!!this.pathNodes[pathNodeCount - 1]: ', this.pathNodes[pathNodeCount - 1].urlPath);

      if (pathNodeCount > 1) {
        allContentData.navSubContent = this.pathNodes[1];
      }

      if (pathNodeCount === 3 ) {
        allContentData.mainContent = this.pathNodes[2];
      } else if (pathNodeCount > 3 ) {
        allContentData.navBetweenContent = this.pathNodes[3];
        allContentData.mainContent = this.pathNodes[pathNodeCount - 2];
        allContentData.mainSubContent = this.pathNodes[pathNodeCount - 1];
      }

      allContentData.navMoreContent = allContentData.mainContent;

      const contentPath = this.getContentPath(urlPath);

      const contentPathArray = contentPath.split('/');
      // todo in pathnodesService verlagern?
      allContentData.navContent.selectedChildIndex = this.pathNodes[1] ? this.pathNodes[1].selectedIndex : undefined;

    }
    return allContentData;
  }

}
