import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UiChange } from '../content.interfaces'

@Component({
  selector: 'cpf-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() contentData: any;
  @Input() navMoreContentData: any;
  @Output() uiChange = new EventEmitter<UiChange>();

  constructor() { }

  ngOnInit() {
  }

}
