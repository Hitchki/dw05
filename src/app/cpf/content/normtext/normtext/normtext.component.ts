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

  public edit = true;

  constructor() { }

  ngOnInit() {
  }

  onClick(type: string, index: string) {
    const urlPath = `${this.contentData.urlPath}/${type}/${index}`;
    console.log('normtextOnclick ', type, index);
    this.uiChange.emit(urlPath);
  }

  onEditClick(actionType: string, index: number) {

    let text = '';

    switch (actionType) {
      case 'edit':
        text = window.prompt('eingabe', this.contentData.cpfNodes[index].text);
        if (text) {
          this.contentData.cpfNodes[index].text = text;
        }
        break;
      case 'add':
        text = window.prompt('eingabe', '');
        if (text) {
          this.contentData.cpfNodes[index].text = text;

          for (let i: number = index; i < this.contentData.cpfNodes.length; i++) {
            this.contentData.cpfNodes[index] = this.contentData.cpfNodes[index + 1];
          }
          this.contentData.cpfNodes[index].text = text;
        }
        break;

      case 'delete':
        if (text) {
          this.contentData.cpfNodes[index].text = text;

          for (let i: number = index; i < this.contentData.cpfNodes.length; i++) {
            this.contentData.cpfNodes[index] = this.contentData.cpfNodes[index - 1];
          }
          // this.contentData.cpfNodes[index].text = text;
        }
        break;
    }

    // this.uiChange.emit(urlPath);
  }

}
