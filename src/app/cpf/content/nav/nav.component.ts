import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ContentData, UiChange } from '../content.interfaces';

@Component({
  selector: 'cpf-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() contentData: ContentData;
  @Input() navMoreContentData: ContentData;
  @Output() uiChange = new EventEmitter<UiChange>();

  constructor() { }

  ngOnInit() {
  }

  // projectOnClick(index: number, type?: string , urlPath?: string, contentData?: ContentData) {
  //   console.log('projectOnclick ', index, type, urlPath, contentData);
  // }

  onClick(index: number, type?: string) {
    console.log('projectOnclick ', index, type);
  }

}
