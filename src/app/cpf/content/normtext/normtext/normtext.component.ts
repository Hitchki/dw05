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
    console.log('normtextOnclick ', this.contentData.urlPath, type, index);
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
        // if (text) {
        //   const length = this.contentData.cpfNodes.length;
        //   for (let i: number = length; index < i; i--) {
        //     this.contentData.cpfNodes[i] = this.contentData.cpfNodes[i - 1];
        //   }
        //   this.contentData.cpfNodes[index + 1] = {text: text};
        // }
        if (text) {
          const newNode = {text: text};
          this.contentData.cpfNodes.splice(index + 1, 0, newNode);
        }
        break;
      case 'insert':
        text = window.prompt('eingabe', '');
        // if (text) {
        //   const length = this.contentData.cpfNodes.length;
        //   for (let i: number = length; index < i; i--) {
        //     this.contentData.cpfNodes[i] = this.contentData.cpfNodes[i - 1];
        //   }
        //   this.contentData.cpfNodes[index] = {text: text};
        // }
        if (text) {
          const newNode = {text: text};
          this.contentData.cpfNodes.splice(index, 0, newNode);
        }
        break;
      case 'addLast':
        const type = window.prompt('type!!', 'moreinfo');
        if (type) {
          text = window.prompt('eingabe', '');
          if (text) {
            this.contentData.cpfNodes[index][type] = [{text: text}];
          }
        }
        break;
      case 'delete':
        // const length = this.contentData.cpfNodes.length;
        // delete this.contentData.cpfNodes[index];
        // for (let i: number = index; i < length - 1; i++) {
        //   this.contentData.cpfNodes[i] = this.contentData.cpfNodes[i + 1];
        // }
        this.contentData.cpfNodes.splice(index, 1);
        break;
    }

    // this.uiChange.emit(urlPath);
  }

}
