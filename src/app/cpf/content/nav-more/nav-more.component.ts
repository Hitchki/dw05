import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ContentData, UiChange } from '../content.interfaces'

@Component({
  selector: 'cpf-nav-more',
  templateUrl: './nav-more.component.html',
  styleUrls: ['./nav-more.component.css']
})
export class NavMoreComponent implements OnInit {

  @Input() contentData: ContentData;
  @Output() uiChange = new EventEmitter<UiChange>();

  constructor() { }

  ngOnInit() {
  }

}
