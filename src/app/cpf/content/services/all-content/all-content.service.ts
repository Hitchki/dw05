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

  getAllContentData(urlPath: string, data, userId: string, fireUrlPrefix?: string): AllContentData {
    const allContentData: AllContentData = {
      navContent: undefined,
      navMoreContent: undefined,
      mainContent: undefined
    };
    if (urlPath && data.projects) {
      this.pathNodes = this.pathnodesService.getPathNodes(urlPath, data, 'prototext', 'https://denkwelten.firebaseio.com');
      // debugger;
      allContentData.navContent = this.pathNodes[0];

      debugger;
      const contentPath = this.getContentPath(urlPath);
      const contentPathArray = contentPath.split('/');

      // todo in pathnodesService verlagern?
      allContentData.navContent.selectedChildIndex = this.pathNodes[1] ? this.pathNodes[1].selectedIndex : undefined;

      const pathNodeCount = this.pathNodes.length;

      console.log('!!!!this.pathNodes: ', this.pathNodes);

      console.log('!!!!this.pathNodes[pathNodeCount - 1]: ', this.pathNodes[pathNodeCount - 1].urlPath);

      if (pathNodeCount <= 2) {
        allContentData.mainContent = undefined;
      } else if (pathNodeCount === 3 ) {
        allContentData.mainContent = this.pathNodes[pathNodeCount - 1];
      } else if (pathNodeCount > 3 ) {
        allContentData.mainContent = this.pathNodes[pathNodeCount - 2];
      }
      if (allContentData.mainContent) {
        allContentData.mainContent.contentPath = contentPath;
      }

      if (pathNodeCount <= 2) {
        allContentData.navMoreContent = undefined;
      } else if (pathNodeCount > 2 ) {
        allContentData.navMoreContent = this.pathNodes[pathNodeCount - 1];
      }

    }
    return allContentData;
  }

}
