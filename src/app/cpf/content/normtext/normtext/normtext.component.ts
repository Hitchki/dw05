import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ContentData, UiChange } from '../../content.interfaces';

@Component({
  selector: 'cpf-normtext',
  templateUrl: './normtext.component.html',
  styleUrls: ['./normtext.component.css']
})
export class NormtextComponent implements OnInit {

  @Input() contentData: ContentData;
  @Output() uiChange = new EventEmitter<UiChange>();

  constructor() { }

  ngOnInit() {
  }

  onClick(index: number, type?: string) {
    debugger;
    let urlPath;
    if (type === 'projects') {
      urlPath = `${this.contentData.urlPath}/${index}`;
    } else {
      urlPath = `${this.contentData.urlPath}/subprojects/${index}`;
      // urlPath = `urlPath\${type}\${index}`;
    }
    this.uiChange.emit(urlPath);
    console.log('projectOnclick ', index, type);
  }
}
