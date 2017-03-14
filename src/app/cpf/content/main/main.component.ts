import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UiChange } from '../content.interfaces'

@Component({
  selector: 'cpf-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() contentData;
  @Output() uiChange = new EventEmitter<UiChange>();

  constructor() { }

  ngOnInit() {
    // alert(this.contentData);
    this.uiChange.emit('Das ist ein Teststring!');
  }

}
