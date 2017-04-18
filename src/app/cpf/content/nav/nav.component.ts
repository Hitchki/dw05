import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ContentData, UiChange } from '../content.interfaces';

@Component({
  selector: 'cpf-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() contentData: ContentData;
  @Input() subContentData: ContentData;
  @Input() navMoreContentData: ContentData;
  @Output() uiChange = new EventEmitter<UiChange>();

  constructor() { }

  ngOnInit() {
  }

  // projectOnClick(index: number, type?: string , urlPath?: string, contentData?: ContentData) {
  //   console.log('projectOnclick ', index, type, urlPath, contentData);
  // }

  onClick(index: number, type?: string) {
    let urlPath;
    if (type === 'projects') {
      // debugger;
      urlPath = this.contentData.urlPath.slice(0, this.contentData.urlPath.lastIndexOf('/'));
      // urlPath = `${this.contentData.urlPath}/${index}`;
      urlPath = `${urlPath}/${index}`;
    } else {
      urlPath = `${this.contentData.urlPath}/subprojects/${index}`;
      // urlPath = `urlPath\${type}\${index}`;
    }
    this.uiChange.emit(urlPath);
    console.log('projectOnclick ', index, type);
  }

}
