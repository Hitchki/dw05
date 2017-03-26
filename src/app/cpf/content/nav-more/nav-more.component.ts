import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UiChange } from '../content.interfaces'

@Component({
  selector: 'cpf-nav-more',
  templateUrl: './nav-more.component.html',
  styleUrls: ['./nav-more.component.css']
})
export class NavMoreComponent implements OnInit {

  @Input() contentData: any;
  @Output() uiChange = new EventEmitter<UiChange>();

  constructor() { }

  ngOnInit() {
  }

}
