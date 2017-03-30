import { Injectable } from '@angular/core';
import { PathnodesService } from '../pathnodes/pathnodes.service';
import { AllContentData, PathNodes } from '../../content.interfaces';

@Injectable()
export class AllContentService {

  private pathNodes: PathNodes;

  constructor(private pathnodesService: PathnodesService) { }

  getAllContentData(urlPath: string, data, userId: string, fireUrlPrefix?: string): AllContentData {
    const allContentData = {
      navContent: undefined,
      navMoreContent: undefined,
      mainContent: undefined
    };
    if (urlPath && data.projects) {
      this.pathNodes = this.pathnodesService.getPathNodes(urlPath, data, 'test2', 'https://denkwelten.firebaseio.com');
      // debugger;
      allContentData.navContent = this.pathNodes[0];
      allContentData.navMoreContent = this.pathNodes[2];
      allContentData.mainContent = this.pathNodes[2];
    }
    return allContentData;
  }

}
