import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ContentData, UiChange } from '../../content.interfaces';

@Component({
  selector: 'cpf-normtext',
  templateUrl: './normtext.component.html',
  styleUrls: ['./normtext.component.css']
})
export class NormtextComponent implements OnInit {

  @Input() contentData: ContentData;
  @Input() subContentData: ContentData;
  @Output() uiChange = new EventEmitter<UiChange>();

  constructor() { }

  ngOnInit() {
  }

  // get

  onClick(type: string, index: string) {
    const urlPath = `${this.contentData.urlPath}/${type}/${index}`;
    console.log('normtextOnclick ', type, index);
    this.uiChange.emit(urlPath);
  }
}
