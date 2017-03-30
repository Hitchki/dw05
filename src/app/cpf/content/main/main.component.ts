import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UiChange } from '../content.interfaces';

@Component({
  selector: 'cpf-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() contentData: any;
  @Input() urlPath: string;
  @Output() uiChange = new EventEmitter<UiChange>();
  @Output() newUrlPath = new EventEmitter<string>();

  constructor() {
    this.urlPath = 'hellöööö';
  }

  ngOnInit() {
    // this.contentData.subs
    // console.log('contentDataöööööööööööööööööö: ', this.contentData);
    // this.uiChange.emit('Das ist ein Teststring!');
    // this.urlPath = this.urlPath + 'abc';
  }

  onClick($event, index) {
    // alert( index);
    // debugger;
    this.newUrlPath.emit(' Das ist ein Teststring!');
  }

  onUiChange($event) {
    // alert( index);
    // debugger;
    this.newUrlPath.emit(' Das ist ein Teststring!');
  }
}
